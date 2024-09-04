// playbackController.ts
import axios from 'axios';
import puppeteer from 'puppeteer';

// serviceHandler.ts (abstract class or interface)
interface ServiceHandler {
  play(): Promise<void>;
  pause(): Promise<void>;
  skip(): Promise<void>;
}

//This class will handle communication with the YouTube API, using a headless browser to control video playback
class YouTubeServiceHandler implements ServiceHandler {
  async play() {
    // Logic to play song on YouTube using Puppeteer
  }
  
  async pause(){
    // Logic to pause song on YouTube using Puppeteer
      if (this.page) {
        await this.page.click('button[aria-label="Pause"]');
      }
    }
  

  async skip() {
    // Logic to skip to the next song on YouTube using Puppeteer
  }
}

// spotifyServiceHandler.ts (future expansion)
class SpotifyServiceHandler implements ServiceHandler {
  async play() {
    // Logic to play song on Spotify using Puppeteer
  }
  
  async pause() {
    // Logic to pause song on Spotify using Puppeteer
  }

  async skip() {
    // Logic to skip to the next song on Spotify using Puppeteer
  }
}

class PlaybackController {
  private currentServiceHandler: ServiceHandler | null = null;

  // Set the current service handler based on the song's source (e.g., YouTube or Spotify)
  setCurrentService(handler: ServiceHandler) {
    this.currentServiceHandler = handler;
  }

  async play() {
    if (this.currentServiceHandler) {
      await this.currentServiceHandler.play();
    }
  }

  async pause() {
    if (this.currentServiceHandler) {
      await this.currentServiceHandler.pause();
    }
  }

  async skip() {
    if (this.currentServiceHandler) {
      await this.currentServiceHandler.skip();
    }
  }
}