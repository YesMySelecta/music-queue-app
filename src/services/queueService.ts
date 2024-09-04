class QueueService {
  private queue: Song[] = [];

  addSong(song: Song) {
    this.queue.push(song);
  }

  getNextSong(): Song | null {
    return this.queue.shift() || null;
  }
}