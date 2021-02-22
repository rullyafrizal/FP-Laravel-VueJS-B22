<?php

namespace App\Listeners;

use App\Events\UserRegisteredEvent;
use App\Mail\UserRegisterMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendEmailNotificationUserRegister implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  UserRegisteredEvent  $event
     * @return void
     */
    public function handle(UserRegisteredEvent $event)
    {
        Mail::to($event->user)->send(new UserRegisterMail($event->user, $event->otp));
    }
}
