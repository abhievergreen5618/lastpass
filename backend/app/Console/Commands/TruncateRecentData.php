<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class TruncateRecentData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:truncate-recent-data';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
{
    $this->info('Truncate recent data started at ' . now());

    // Your truncation logic here

    $this->info('Truncate recent data completed at ' . now());
}

}
