# TODO List for Music Queue Server

## Phase 1: Basic Setup - achieving MVP
- [x] Set up basic Node.js and Express server
- [ ] Create a basic 'database' that will store the song queue
- [ ] Create a basic REST API for playback control (play, pause, skip)
- [ ] Implement Puppeteer for browser control on the server
- [ ] Establish the structure for song queue management

## Phase 2: Playback and Queue System
- [ ] Create `PlaybackController` class to manage song playback and tab switching
  - [ ] Implement two tabs per streaming service for faster song switching
  - [ ] Preload the next song in the second tab while the current one is playing
- [ ] Build `QueueService` class to manage the song queue:
  - [ ] Add song to queue from multiple streaming services (Spotify, YouTube, etc.)
  - [ ] Handle play, pause, skip commands
  - [ ] Automatically transition to the next song when the current one finishes
  - [ ] Provide methods to manage the queue (e.g., remove songs, reorder)

## Phase 3: Multi-Service Integration
- [ ] Implement search functionality for Spotify API
- [ ] Implement search functionality for YouTube API
- [ ] Normalize search results across services into a unified `Song` model
- [ ] Ensure seamless transitions between songs from different services

## Phase 4: User Control Interface
- [ ] Create basic frontend (e.g., React or plain HTML/CSS/JS) for user interaction
  - [ ] Display current queue and playback controls
  - [ ] Allow users to add, remove, reorder songs in the queue
  - [ ] Let users control playback (play, pause, skip)
  
## Phase 5: Optimization and Buffering
- [ ] Optimize tab switching and buffering for minimal delay
- [ ] Test different browsers (headless Chrome, Firefox) for compatibility and performance
- [ ] Experiment with handling network fluctuations during streaming
  
## Phase 6: Additional Features
- [ ] Add support for additional streaming services (SoundCloud, etc.)
- [ ] Implement user authentication (if required)
- [ ] Add error handling and logging to catch playback issues