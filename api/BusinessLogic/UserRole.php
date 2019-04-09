<?php


namespace BusinessLogic;


class UserRole {
    const ADMINISTRATOR = 1;
    CONST TRUSTED_EDITOR = 2;

    /**
     * @param \DataAccess\Models\int[] $userRoles
     * @param \DataAccess\Models\int[] $requiredRoles
     * @return bool
     */
    public static function hasAccess(array $userRoles, array $requiredRoles) {
        if (in_array(self::ADMINISTRATOR, $userRoles)) {
            return true;
        }

        foreach ($requiredRoles as $requiredRole) {
            if (!in_array($requiredRole, $userRoles)) {
                return false;
            }
        }

        return true;
    }
}