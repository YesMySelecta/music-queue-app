interface Song {
  title: string;
  url: string;
  source: 'YouTube' | 'Spotify';  // Or other future services
}

let queue: Song[] = [];

class QueueService {
  private queue: Song[] = [];

  addSong(song: Song) {
    this.queue.push(song);
  }

  getNextSong(): Song | null {
    return this.queue.shift() || null;
  }
}