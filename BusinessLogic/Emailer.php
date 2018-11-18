<?php

namespace BusinessLogic;

use Config\Constants;
use Config\Settings;
use Mailgun\Mailgun;
use PHPMailer\PHPMailer\PHPMailer;
use Twig_Environment;

class Emailer {
    function sendEmail(string $templateName, $model, string $to, Twig_Environment $twig) {
        $constants = new Constants();
        $settings = new Settings();
        $template = $twig->load($templateName);

        $modelArray = [
            'model' => $model,
            'constants' => $constants
        ];
        $subject = $template->renderBlock('subject', $modelArray);
        $bodyText = $template->renderBlock('body_text', $modelArray);
        $bodyHtml = $template->renderBlock('body_html', $modelArray);

        if ($settings->emailMethod === 'SMTP') {
            $mailer = new PHPMailer();
            $mailer->isSMTP();
            $mailer->Host = $settings->smtpDomain;
            $mailer->SMTPAuth = true;
            $mailer->Username = $settings->smtpUsername;
            $mailer->Password = $settings->smtpPassword;
            $mailer->SMTPSecure = 'ssl';
            $mailer->Port = 465;

            $mailer->setFrom($settings->noReplyEmail);
            $mailer->addAddress($to);
            $mailer->addBCC($settings->bccEmail);
            $mailer->isHTML(true);
            $mailer->Subject = $subject;
            $mailer->Body = $bodyHtml;
            $mailer->AltBody = $bodyText;

            $mailer->send();
        } else {
            $mailgun = Mailgun::create($settings->mailgunApiKey);
            $mailgun->messages()->send($settings->mailgunDomain, [
                'from' => $settings->noReplyEmail,
                'to' => $to,
                'subject' => $subject,
                'text' => $bodyText,
                'html' => $bodyHtml
            ]);
        }
    }
}