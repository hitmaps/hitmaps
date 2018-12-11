<?php

namespace BusinessLogic\Session;

/**
 * Session Helper Class
 *
 * A simple session wrapper class.
 *
 * Usage Example:
 * <?php
 * try {
 *     Session::write('value', 'key1', 'key2');
 *     echo Session::read('key1', 'key2');
 * }
 * catch (Exception $e) {
 *     // do something
 * }
 * ?>
 *
 * Copyright (c) 2013 Robert Dunham
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * @remarks A simple session wrapper class.
 * @author Robert Dunham <contact@robdunham.info>
 * @author Victor Mezrin <mezrinv@gmail.com>
 * @website http://www.robdunham.info
 * @website https://gist.github.com/Mezrin/5846151
 * @version 1.0.3
 * @date 20130514
 * @copyright Copyright (c) 2013, Robert Dunham
 */
class Session {
    /**
     * Session Age.
     *
     * The number of seconds of inactivity before a session expires.
     *
     * @var integer
     */
    protected static $SESSION_AGE = 7200;
    /**
     * Helps prevent hijacking by resetting the session ID at every request.
     * Might cause unnecessary file I/O overhead?
     *
     * @var bool
     */
    protected static $REGENERATE_SESSION_ID = false; //todo check does we need this feature and will it work or not

    /**
     * Writes a value to the current session data.
     *
     * After value you must specify list of keys, which will be used to read/rewrite variable
     *
     * @param mixed $value Single value or array of values to be written.
     * @return void
     * @throws ExpiredSessionException
     * @throws InvalidArgumentTypeException Session key is not a string value.
     * @throws SessionDisabledException
     */
    public static function write($value) {
        self::_init();
        if (func_num_args() > 1) {
            $keys = array_slice(func_get_args(), 1);
            foreach ($keys as $keysEntry) {
                if (!is_string($keysEntry))
                    throw new InvalidArgumentTypeException('Session key must be string value');
            }
        } else {
            throw new InvalidArgumentTypeException("To write session variable you must specify it's value and, at least, one key");
        }
        $target = & $_SESSION;
        for ($keyIndex = 0; $keyIndex < count($keys); $keyIndex++) {
            $keysEntry = $keys[$keyIndex];
            if ($keyIndex < count($keys) - 1) {
                if (!isset($target[$keysEntry]) || !is_array($target[$keysEntry])) {
                    $target[$keysEntry] = array(); //to avoid manually creation of subarrays create it at first attempt
                }
                $target = & $target[$keysEntry];
            } else {
                $target[$keysEntry] = $value;
            }
        }
        self::_age();
    }

    /**
     * Reads a specific value from the current session data.
     *
     * You must specify list of keys, which will be used to read variable
     *
     * @throws UndefinedValueException $_SESSION variable for such keys not defined
     * @throws InvalidArgumentTypeException
     * @return mixed Returns a string value upon success.  Returns false upon failure.
     * @throws ExpiredSessionException
     */
    public static function read() {
        if (func_num_args() > 0) {
            $keys = func_get_args();
            foreach ($keys as $keysEntry) {
                if (!is_string($keysEntry))
                    throw new InvalidArgumentTypeException('Session key must be string value');
            }
        } else {
            throw new InvalidArgumentTypeException("To read session variable you must specify at least one key");
        }
        self::_age();
        $target = & $_SESSION;
        foreach ($keys as $keysEntry) {
            if (isset($target[$keysEntry])) {
                $target = & $target[$keysEntry];
            } else {
                throw new UndefinedValueException("Value \$_SESSION for keys (" . implode(' ', $keys) . ") not defined");
            }
        }
        return $target;
    }
    /**
     * Echos current session data.
     *
     * @return void
     */
    public static function dump() {
        self::_init();
        echo nl2br(print_r($_SESSION));
    }
    /**
     * Starts or resumes a session by calling {@link Session::_init()}.
     *
     * @see Session::_init()
     * @return boolean Returns true upon success and false upon failure.
     * @throws SessionDisabledException Sessions are disabled.
     */
    public static function start() {
        // this function is extraneous
        return self::_init();
    }
    /**
     * Expires a session if it has been inactive for a specified amount of time.
     *
     * @return void
     * @throws ExpiredSessionException() Throws exception when read or write is attempted on an expired session.
     */
    private static function _age() {
        if (isset($_SESSION['LAST_ACTIVE']) && time() - $_SESSION['LAST_ACTIVE'] > self::$SESSION_AGE) {
            self::destroy();
            throw new ExpiredSessionException();
        }
        $_SESSION['LAST_ACTIVE'] = time();
    }
    /**
     * Returns current session cookie parameters or an empty array.
     *
     * @return array Associative array of session cookie parameters.
     */
    public static function params() {
        $r = array();
        if ('' !== session_id()) {
            $r = session_get_cookie_params();
        }
        return $r;
    }
    /**
     * Closes the current session and releases session file lock.
     *
     * @return void
     */
    public static function close() {
        if ('' !== session_id()) {
            session_write_close();
        }
    }
    /**
     * Alias for {@link Session::close()}.
     *
     * @see Session::close()
     * @return void
     */
    public static function commit() {
        self::close();
    }
    /**
     * Removes session data and destroys the current session.
     *
     * @return void
     */
    public static function destroy() {
        if ('' !== session_id()) {
            $_SESSION = array();
            // If it's desired to kill the session, also delete the session cookie.
            // Note: This will destroy the session, and not just the session data!
            if (ini_get("session.use_cookies")) {
                $params = session_get_cookie_params();
                setcookie(session_name(), '', time() - 42000,
                    $params["path"], $params["domain"],
                    $params["secure"], $params["httponly"]
                );
            }
            session_destroy();
        }
    }
    /**
     * Initializes a new session or resumes an existing session.
     *
     * @return boolean Returns true upon success and false upon failure.
     * @throws SessionDisabledException Sessions are disabled.
     */
    private static function _init() {
        if (session_status() == PHP_SESSION_DISABLED)
            throw new SessionDisabledException();
        if ('' === session_id()) {
            return session_start();
        }
        if (true === self::$REGENERATE_SESSION_ID) {
            return session_regenerate_id();
        } else {
            return true;
        }
    }
}