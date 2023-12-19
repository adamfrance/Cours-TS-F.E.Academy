function readBook(title: string, chapters: number[]): void {
  console.log(`Starting to read ${title}...`);
  chapters.forEach((chapter) => {
    console.log(`Reading chapter ${chapter}.`);
  });
  console.log("Done reading.");
}
readBook("T", [1, 2, 3]);
