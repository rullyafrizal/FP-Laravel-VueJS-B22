<?php

namespace App\Mail;

use App\OTP_Code;
use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class UserRegisterMail extends Mailable
{
    use Queueable, SerializesModels;

    protected $user;
    protected $otp;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user, OTP_Code $otp)
    {
        $this->user = $user;
        $this->otp = $otp;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('equifund.charity@gmail.com')
                    ->view('send_email_user_registered')
                    ->with([
                        'name' => $this->user->name,
                        'otp' => $this->otp->otp,
                     ]);
    }
}
