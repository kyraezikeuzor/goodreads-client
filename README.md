goodreads-parser
Goodreads book parser for Node.js

Install
npm i goodreads-client
Usage
First, import library

import Goodreads from "goodreads-client";

try {
  const data = await GoodReads.getBook("9781501128035");
  console.log("Book Data::", data);
} catch (error) {
  console.log("error", error);
}
Response:
{
    url: 'https://www.goodreads.com/search?q=9781501128035',
    title: 'The Unhoneymooners',
    author: 'Christina Lauren',
    pubDate: 'May 14, 2019',
    description: 'Olive is always unlucky: in her career, in love, in…well, everything. Her identical twin sister Ami, on the other hand, is probably the luckiest person in the world. Her meet-cute with her fiancé is something out of a romantic comedy (gag) and she’s managed to finance her entire wedding by winning a series of Internet contests (double gag). Worst of all, she’s forcing Olive to spend the day with her sworn enemy, Ethan, who just happens to be the best man.Olive braces herself to get through 24 hours of wedding hell before she can return to her comfortable, unlucky life. But when the entire wedding party gets food poisoning from eating bad shellfish, the only people who aren’t affected are Olive and Ethan. And now there’s an all-expenses-paid honeymoon in Hawaii up for grabs.Putting their mutual hatred aside for the sake of a free vacation, Olive and Ethan head for paradise, determined to avoid each other at all costs. But when Olive runs into her future boss, the little white lie she tells him is suddenly at risk to become a whole lot bigger. She and Ethan now have to pretend to be loving newlyweds, and her luck seems worse than ever. But the weird thing is that she doesn’t mind playing pretend. In fact, she feels kind of... lucky.Alternate cover edition of ISBN 9781501128035.',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1548201335i/42201431.jpg',
    isbn13: '9781501128035',
    pages: 432,
    rating: 3.9,
    ratingCount: 1068296,
    reviewsCount: 97111,
    language: 'English',
    genres: [
      'Contemporary',
      'Enemies To Lovers',
      'Fiction',
      'Contemporary Romance',
      'Audiobook',
      'Romance',
      'Chick Lit'
    ],
    readAt: 'Nov 27, 2022'
}


Usage: await Goodreads.getBookshelf(isbn, shelfName)

try {
  const data = await GoodReads.getBookshelf("130048134", "read");
  console.log("Book Data::", data);
} catch (error) {
  console.log("error", error);
}
Response:
[
  {
    url: 'https://www.goodreads.com/search?q=9780448494517',
    title: 'A Reaper at the Gates',
    author: 'Sabaa Tahir',
    pubDate: 'June 12, 2018',
    description: "BOOK THREE IN THE NEW YORK TIMES BESTSELLING SERIES An Entertainment Weekly Summer Reads pick and New York Times bestseller!Beyond the Martial Empire and within it, the threat of war looms ever larger.Helene Aquilla, the Blood Shrike, is desperate to protect her sister's life and the lives of everyone in the Empire. But she knows that danger lurks on all sides: Emperor Marcus, haunted by his past, grows increasingly unstable and violent, while Keris Veturia, the ruthless Commandant, capitalizes on the Emperor's volatility to grow her own power--regardless of the carnage she leaves in her path.Far to the east, Laia of Serra knows the fate of the world lies not in the machinations of the Martial court, but in stopping the Nightbringer. But in the hunt to bring him down, Laia faces unexpected threats from those she hoped would help her, and is drawn into a battle she never thought she'd have to fight.And in the land between the living and the dead, Elias Veturius has given up his freedom to serve as Soul Catcher. But in doing so, he has vowed himself to an ancient power that demands his complete surrender--even if that means abandoning the woman he loves.",
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1715195973i/213075365.jpg',
    isbn13: '9780448494517',
    pages: 480,
    rating: 4.14,
    ratingCount: 114033,
    reviewsCount: 13517,
    language: 'English',
    genres: [
      'Fantasy',
      'Young Adult',
      'Romance',
      'Young Adult Fantasy',
      'Audiobook',
      'Fiction',
      'Magic'
    ],
    readAt: ''
  },
  null,
  {
    url: 'https://www.goodreads.com/search?q=9781595148049',
    title: 'An Ember in the Ashes',
    author: 'Sabaa Tahir',
    pubDate: 'April 28, 2015',
    description: 'This is an alternative cover edition for ISBN-13: 9781595148049.Laia is a slave. Elias is a soldier. Neither is free.Under the Martial Empire, defiance is met with death. Those who do not vow their blood and bodies to the Emperor risk the execution of their loved ones and the destruction of all they hold dear.It is in this brutal world, inspired by ancient Rome, that Laia lives with her grandparents and older brother. The family ekes out an existence in the Empire’s impoverished backstreets. They do not challenge the Empire. They’ve seen what happens to those who do.But when Laia’s brother is arrested for treason, Laia is forced to make a decision. In exchange for help from rebels who promise to rescue her brother, she will risk her life to spy for them from within the Empire’s greatest military academy.There, Laia meets Elias, the school’s finest soldier—and secretly, its most unwilling. Elias wants only to be free of the tyranny he’s being trained to enforce. He and Laia will soon realize that their destinies are intertwined—and that their choices will change the fate of the Empire itself.',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1715196282i/213075476.jpg',
    isbn13: '9781595148049',
    pages: 480,
    rating: 4.24,
    ratingCount: 334975,
    reviewsCount: 40549,
    language: 'English',
    genres: [
      'Fantasy',
      'Young Adult',
      'Romance',
      'Fiction',
      'Young Adult Fantasy',
      'Dystopia',
      'Audiobook'
    ],
    readAt: ''
  },
  {
    url: 'https://www.goodreads.com/search?q=9798217188123',
    title: 'Problematic Summer Romance',
    author: 'Ali Hazelwood',
    pubDate: 'May 27, 2025',
    description: 'What is wrong meets what feels right in this romance set in Italy by the New York Times bestselling author of Deep End.Maya Killgore is twenty-three and still in the process of figuring out her life.Conor Harkness is thirty-eight, and Maya cannot stop thinking about him.It’s such a cliché, it almost makes her heart implode: older man and younger woman; successful biotech guy and struggling grad student; brother’s best friend and the girl he never even knew existed. As Conor loves to remind her, the power dynamic is too imbalanced. Any relationship between them would be problematic in too many ways to count, and Maya should just get over him. After all, he has made it clear that he wants her gone from his life.But not everything is as it seems—and clichés sometimes become plot twists.When Maya’s brother decides to get married in Taormina, she and Conor end up stuck together in a romantic Sicilian villa for over a week. There, on the beautiful Ionian coast, between ancient ruins, delicious foods, and natural caves, Maya realizes that Conor might be hiding something from her. And as the destination wedding begins to erupt out of control, she decides that a summer fling might be just what she needs—even if it’s a problematic one.',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1745430233i/228691356.jpg',
    isbn13: '9798217188123',
    pages: 416,
    rating: 3.93,
    ratingCount: 149376,
    reviewsCount: 27264,
    language: 'English',
    genres: [
      'Romance',
      'Contemporary',
      'Audiobook',
      'Contemporary Romance',
      'Summer',
      'Fiction',
      'Adult'
    ],
    readAt: 'Jun 2025'
  },
  {
    url: 'https://www.goodreads.com/search?q=9781335523129',
    title: 'I Am Not Jessica Chen',
    author: 'Ann Liang',
    pubDate: 'January 28, 2025',
    description: 'After getting rejected by every single Ivy League she applied to and falling short of all her Asian immigrant parents’ expectations, seventeen-year-old Jenna Chen makes a wish to become her smarter, infinitely more successful Harvard-bound cousin, Jessica Chen—only for her wish to come true. Literally.Now trapped inside Jessica’s body, with access to Jessica’s most private journals and secrets, Jenna soon discovers that being the top student at the elite, highly competitive Havenwood Private Academy isn’t quite what she imagined. Worse, as everyone—including her own parents—start having trouble remembering who Jenna Chen is, or if she ever even existed, Jenna must decide if playing the role of the perfect daughter and student is worth losing her true self forever.',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1721069346i/61374793.jpg',
    isbn13: '9781335523129',
    pages: 320,
    rating: 4.05,
    ratingCount: 13186,
    reviewsCount: 3733,
    language: 'English',
    genres: [
      'Romance',
      'Young Adult',
      'Contemporary',
      'Fantasy',
      'Fiction',
      'Magical Realism',
      'Audiobook'
    ],
    readAt: 'Jun 09, 2025'
  },
  {
    url: 'https://www.goodreads.com/search?q=9780743273565',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    pubDate: 'April 10, 1925',
    description: 'The only edition of the beloved classic that is authorized by Fitzgerald’s family and from his lifelong publisher.This edition is the enduring original text, updated with the author’s own revisions, a foreword by his granddaughter, and with a new introduction by National Book Award winner Jesmyn Ward.The Great Gatsby, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career. First published by Scribner in 1925, this quintessential novel of the Jazz Age has been acclaimed by generations of readers. The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan is an exquisitely crafted tale of America in the 1920s.',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1738790966i/4671.jpg',
    isbn13: '9780743273565',
    pages: 180,
    rating: 3.93,
    ratingCount: 5744346,
    reviewsCount: 123647,
    language: 'English',
    genres: [
      'Classics',
      'Fiction',
      'School',
      'Historical Fiction',
      'Romance',
      'Literature',
      'Novels'
    ],
    readAt: 'Jan 2024'
  },
  {
    url: 'https://www.goodreads.com/search?q=9781481430487',
    title: 'Always and Forever, Lara Jean',
    author: 'Jenny Han',
    pubDate: 'May 2, 2017',
    description: 'Lara Jean is having the best senior year.And there’s still so much to look forward to: a class trip to New York City, prom with her boyfriend Peter, Beach Week after graduation, and her dad’s wedding to Ms. Rothschild. Then she’ll be off to college with Peter, at a school close enough for her to come home and bake chocolate chip cookies on the weekends.Life couldn’t be more perfect!At least, that’s what Lara Jean thinks . . . until she gets some unexpected news.Now the girl who dreads change must rethink all her plans—but when your heart and your head are saying two different things, which one should you listen to?',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1495992139i/35247769.jpg',
    isbn13: '9781481430487',
    pages: 325,
    rating: 4,
    ratingCount: 281186,
    reviewsCount: 23927,
    language: 'English',
    genres: [
      'Romance',
      'Young Adult',
      'Contemporary',
      'Fiction',
      'Audiobook',
      'Young Adult Contemporary',
      'Young Adult Romance'
    ],
    readAt: ''
  },
  {
    url: 'https://www.goodreads.com/search?q=9781442426733',
    title: 'P.S. I Still Love You',
    author: 'Jenny Han',
    pubDate: 'May 26, 2015',
    description: "Lara Jean didn’t expect to really fall for Peter.They were just pretending. Until they weren’t. And now Lara Jean has to learn what it's like to be in a real relationship and not just a make-believe one.But when another boy from her past returns to her life, Lara Jean’s feelings for him suddenly return too. Can a girl be in love with two boys at once?In this charming and heartfelt sequel to the New York Times bestseller To All the Boys I've Loved Before, Lara Jean is about to find out that falling in love is the easy part.",
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1422881430i/20698530.jpg',
    isbn13: '9781442426733',
    pages: 337,
    rating: 4.01,
    ratingCount: 413891,
    reviewsCount: 30203,
    language: 'English',
    genres: [
      'Romance',
      'Young Adult',
      'Contemporary',
      'Fiction',
      'Audiobook',
      'Young Adult Contemporary',
      'Chick Lit'
    ],
    readAt: 'Jan 2024'
  },
  {
    url: 'https://www.goodreads.com/search?q=9781442426719',
    title: "To All the Boys I've Loved Before",
    author: 'Jenny Han',
    pubDate: 'April 15, 2014',
    description: "To All the Boys I’ve Loved Before is the story of Lara Jean, who has never openly admitted her crushes, but instead wrote each boy a letter about how she felt, sealed it, and hid it in a box under her bed. But one day Lara Jean discovers that somehow her secret box of letters has been mailed, causing all her crushes from her past to confront her about the letters: her first kiss, the boy from summer camp, even her sister's ex-boyfriend, Josh. As she learns to deal with her past loves face to face, Lara Jean discovers that something good may come out of these letters after all.",
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1372086100i/15749186.jpg',
    isbn13: '9781442426719',
    pages: 355,
    rating: 4.04,
    ratingCount: 1023347,
    reviewsCount: 53766,
    language: 'English',
    genres: [
      'Romance',
      'Young Adult',
      'Contemporary',
      'Fiction',
      'Audiobook',
      'Chick Lit',
      'Realistic Fiction'
    ],
    readAt: 'Jun 2024'
  },
  {
    url: 'https://www.goodreads.com/search?q=9781416995586',
    title: "We'll Always Have Summer",
    author: 'Jenny Han',
    pubDate: 'April 26, 2011',
    description: "It's been two years since Conrad told Belly to go with Jeremiah. She and Jeremiah have been inseparable ever since, even attending the same college—only, their relationship hasn't exactly been the happily ever after Belly had hoped it would be. And when Jeremiah makes the worst mistake a boy can make, Belly is forced to question what she thought was true love. Does she really have a future with Jeremiah? Has she ever gotten over Conrad? It's time for Belly to decide, once and for all, who has her heart forever.",
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327054226i/8680278.jpg',
    isbn13: '9781416995586',
    pages: 291,
    rating: 3.78,
    ratingCount: 590379,
    reviewsCount: 53383,
    language: 'English',
    genres: [
      'Romance',
      'Young Adult',
      'Contemporary',
      'Summer',
      'Audiobook',
      'Fiction',
      'Summer Reads'
    ],
    readAt: 'Jan 2024'
  },
  {
    url: 'https://www.goodreads.com/search?q=9780141956763',
    title: "It's Not Summer Without You",
    author: 'Jenny Han',
    pubDate: 'April 27, 2010',
    description: 'No ano passado, todos os sonhos de Belly se tornaram realidade e o pensamento de um verão sem a praia de Cousins ​​era inconcebível. Mas, como a ascensão e queda da maré do oceano, as coisas podem mudar - desse mesmo jeito. De repente, o tempo que ela sempre esperava é o que ela mais teme agora. E quando Jeremiah liga para dizer que Conrad desapareceu, Belly deve decidir como ela vai passar este verão: perseguindo o rapaz que ela ama, ou, finalmente, deixá-lo ir.',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659191517i/60534826.jpg',
    isbn13: '9780141956763',
    pages: 288,
    rating: 3.76,
    ratingCount: 654016,
    reviewsCount: 45242,
    language: 'English',
    genres: [
      'Romance',
      'Young Adult',
      'Contemporary',
      'Summer',
      'Audiobook',
      'Fiction',
      'Summer Reads'
    ],
    readAt: 'Jan 2024'
  },
  {
    url: 'https://www.goodreads.com/search?q=9780439023498',
    title: 'Catching Fire',
    author: 'Suzanne Collins',
    pubDate: 'September 1, 2009',
    description: "Sparks are igniting.Flames are spreading.And the Capitol wants revenge. Against all odds, Katniss Everdeen has won the Hunger Games. She and fellow District 12 tribute Peeta Mellark are miraculously still alive. Katniss should be relieved, happy even. After all, she has returned to her family and her longtime friend, Gale. Yet nothing is the way Katniss wishes it to be. Gale holds her at an icy distance. Peeta has turned his back on her completely. And there are whispers of a rebellion against the Capitol—a rebellion that Katniss and Peeta may have helped create. Much to her shock, Katniss has fueled an unrest that she's afraid she cannot stop. And what scares her even more is that she's not entirely convinced she should try. As time draws near for Katniss and Peeta to visit the districts on the Capitol's cruel Victory Tour, the stakes are higher than ever. If they can't prove, without a shadow of a doubt, that they are lost in their love for each other, the consequences will be horrifying.In Catching Fire, the second novel of the Hunger Games trilogy, Suzanne Collins continues the story of Katniss Everdeen, testing her more than ever before . . . and surprising readers at every turn.",
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722941i/6148028.jpg',
    isbn13: '9780439023498',
    pages: 391,
    rating: 4.35,
    ratingCount: 4023674,
    reviewsCount: 147031,
    language: 'English',
    genres: [
      'Young Adult',
      'Dystopia',
      'Fiction',
      'Fantasy',
      'Science Fiction',
      'Romance',
      'Adventure'
    ],
    readAt: 'Dec 29, 2023'
  },
  {
    url: 'https://www.goodreads.com/search?q=9781408725795',
    title: 'Love, Theoretically',
    author: 'Ali Hazelwood',
    pubDate: 'June 13, 2023',
    description: 'The many lives of theoretical physicist Elsie Hannaway have finally caught up with her. By day, she’s an adjunct professor, toiling away at grading labs and teaching thermodynamics in the hopes of landing tenure. By other day, Elsie makes up for her non-existent paycheck by offering her services as a fake girlfriend, tapping into her expertly honed people pleasing skills to embody whichever version of herself the client needs.Honestly, it’s a pretty sweet gig—until her carefully constructed Elsie-verse comes crashing down. Because Jack Smith, the annoyingly attractive and broody older brother of her favorite client, turns out to be the cold-hearted experimental physicist who ruined her mentor’s career and undermined the reputation of theorists everywhere. And that same Jack who now sits on the hiring committee at MIT, right between Elsie and her dream job.Elsie is prepared for an all-out war of scholarly sabotage but…those long, penetrating looks? Not having to be anything other than her true self when she’s with him? Will falling into an experimentalist’s orbit finally tempt her to put her most guarded theories on love into practice?',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681476644i/61326735.jpg',
    isbn13: '9781408725795',
    pages: 389,
    rating: 4.09,
    ratingCount: 601462,
    reviewsCount: 78689,
    language: 'English',
    genres: [
      'Romance',
      'Contemporary',
      'Contemporary Romance',
      'Fiction',
      'Enemies To Lovers',
      'Audiobook',
      'Adult'
    ],
    readAt: 'Jan 2023'
  },
  {
    url: 'https://www.goodreads.com/search?q=9780593619919',
    title: 'Check & Mate',
    author: 'Ali Hazelwood',
    pubDate: 'November 7, 2023',
    description: `Mallory Greenleaf is done with chess. Every move counts nowadays. After the sport led to the destruction of her family four years earlier, Mallory's focus is on her mom, her sisters, and the dead-end job that keeps the lights on. That is, until she begrudgingly agrees to play in one last charity tournament and inadvertently wipes the board with notorious "Kingkiller" Nolan Sawyer: current world champion and reigning bad boy of chess.Nolan's loss to an unknown rook-ie shocks everyone—especially Mallory. What's even more confusing? His desire to cross pawns again. What kind of gambit is Nolan playing? The smart move would be to walk away. Resign. Game over. But Mallory's victory opens the door to sorely needed cash prizes and, despite everything, she can't help feeling drawn to the enigmatic strategist....As she rockets up the ranks, Mallory struggles to keep her family safely separated from the game that wrecked it in the first place. And as her love for the sport she so desperately wanted to hate begins to rekindle, Mallory quickly realizes that the games aren't only on the board, the spotlight is hotter than she imagined, and the competition can be fierce(-ly attractive. And intelligent...and infuriating...)`,
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1678378842i/60683957.jpg',
    isbn13: '9780593619919',
    pages: 347,
    rating: 3.95,
    ratingCount: 326637,
    reviewsCount: 52498,
    language: 'English',
    genres: [
      'Romance',
      'Young Adult',
      'Contemporary',
      'Audiobook',
      'Fiction',
      'Contemporary Romance',
      'Enemies To Lovers'
    ],
    readAt: 'Dec 29, 2023'
  },
  {
    url: 'https://www.goodreads.com/search?q=9781668001226',
    title: 'It Starts with Us',
    author: 'Colleen Hoover',
    pubDate: 'October 18, 2022',
    description: `BEFORE IT ENDS WITH US, IT STARTED WITH ATLAS.Lily and Ryle have just settled into a civil co-parenting rhythm with their daughter, Emerson, when Lily suddenly runs into Atlas nearly two years after they last spoke. Elated that the timing finally seems to be right to give what they have together a real chance, Atlas asks Lily on a date.But Lily's excitement is almost immediately replaced by dread and anxiety when Lily remembers that Ryle, though no longer her husband, is still very much part of her life. And though Ryle would dislike Lily dating anyone but him, Atlas Corrigan is the one man he absolutely will not stand having in his ex-wife and daughter's lives.Told from the perspectives of Lily and Atlas, It Starts with Us gives readers a deeper look into Atlas's past as he and Lily reconnect and rekindle the love they shared as teenagers while navigating a volatile ex-husband who believes Atlas to be one of the reasons his marriage with Lily ended.It Starts with Us picks up right where the epilogue for the "glorious and touching" (USA Today) It Ends with Us left off, giving readers the exhilarating sequel to Colleen's bestselling phenomenon they have been begging for!`,
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1644605295i/60393672.jpg',
    isbn13: '9781668001226',
    pages: 324,
    rating: 3.85,
    ratingCount: 2028834,
    reviewsCount: 126438,
    language: 'English',
    genres: [
      'Fiction',
      'Audiobook',
      'Contemporary',
      'Contemporary Romance',
      'Adult',
      'Book Club',
      'Chick Lit'
    ],
    readAt: 'Jan 2023'
  },
  null,
  {
    url: 'https://www.goodreads.com/search?q=9780142437261',
    title: 'The Scarlet Letter',
    author: 'Nathaniel Hawthorne',
    pubDate: 'March 16, 1850',
    description: 'Set in 17th-century Puritan Boston, Massachusetts, during the years 1642 to 1649, it tells the story of Hester Prynne, who conceives a daughter through an affair and will not reveal her lover’s identity. The scarlet letter A (for adultery) she has to wear on her clothes, along with her public shaming, is her punishment for her sin and her secrecy. She struggles to create a new life of repentance and dignity. Throughout the book, Hawthorne explores themes of legalism, sin, and guilt.',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1404810944i/12296.jpg',
    isbn13: '9780142437261',
    pages: 279,
    rating: 3.44,
    ratingCount: 902343,
    reviewsCount: 22771,
    language: 'English',
    genres: [
      'Classics',
      'Fiction',
      'Historical Fiction',
      'School',
      'Literature',
      'High School',
      'Historical'
    ],
    readAt: 'Jan 2023'
  },
  {
    url: 'https://www.goodreads.com/search?q=9780452284234',
    title: '1984',
    author: 'George Orwell',
    pubDate: 'June 8, 1949',
    description: "A masterpiece of rebellion and imprisonment where war is peace freedom is slavery and Big Brother is watching. Thought Police, Big Brother, Orwellian - these words have entered our vocabulary because of George Orwell's classic dystopian novel 1984. The story of one man's Nightmare Odyssey as he pursues a forbidden love affair through a world ruled by warring states and a power structure that controls not only information but also individual thought and memory 1984 is a prophetic haunting tale More relevant than ever before 1984 exposes the worst crimes imaginable the destruction of truth freedom and individuality. With a foreword by Thomas Pynchon. This beautiful paperback edition features deckled edges and french flaps a perfect gift for any occasionAlternate cover edition can be found here.",
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg',
    isbn13: '9780452284234',
    pages: 368,
    rating: 4.2,
    ratingCount: 5242695,
    reviewsCount: 144498,
    language: 'English',
    genres: [
      'Classics',
      'Fiction',
      'Science Fiction',
      'Dystopia',
      'Literature',
      'Politics',
      'Novels'
    ],
    readAt: 'Aug 2023'
  },
  {
    url: 'https://www.goodreads.com/search?q=9780439023481',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    pubDate: 'September 14, 2008',
    description: "Winning means fame and fortune. Losing means certain death. The Hunger Games have begun. . . .In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.Sixteen-year-old Katniss Everdeen regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before-and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weigh survival against humanity and life against love.",
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052.jpg',
    isbn13: '9780439023481',
    pages: 374,
    rating: 4.35,
    ratingCount: 9617506,
    reviewsCount: 252382,
    language: 'English',
    genres: [
      'Young Adult',
      'Dystopia',
      'Fiction',
      'Fantasy',
      'Science Fiction',
      'Romance',
      'Adventure'
    ],
    readAt: 'Dec 25, 2023'
  },
  {
    url: 'https://www.goodreads.com/search?q=9781501128035',
    title: 'The Unhoneymooners',
    author: 'Christina Lauren',
    pubDate: 'May 14, 2019',
    description: 'Olive is always unlucky: in her career, in love, in…well, everything. Her identical twin sister Ami, on the other hand, is probably the luckiest person in the world. Her meet-cute with her fiancé is something out of a romantic comedy (gag) and she’s managed to finance her entire wedding by winning a series of Internet contests (double gag). Worst of all, she’s forcing Olive to spend the day with her sworn enemy, Ethan, who just happens to be the best man.Olive braces herself to get through 24 hours of wedding hell before she can return to her comfortable, unlucky life. But when the entire wedding party gets food poisoning from eating bad shellfish, the only people who aren’t affected are Olive and Ethan. And now there’s an all-expenses-paid honeymoon in Hawaii up for grabs.Putting their mutual hatred aside for the sake of a free vacation, Olive and Ethan head for paradise, determined to avoid each other at all costs. But when Olive runs into her future boss, the little white lie she tells him is suddenly at risk to become a whole lot bigger. She and Ethan now have to pretend to be loving newlyweds, and her luck seems worse than ever. But the weird thing is that she doesn’t mind playing pretend. In fact, she feels kind of... lucky.Alternate cover edition of ISBN 9781501128035.',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1548201335i/42201431.jpg',
    isbn13: '9781501128035',
    pages: 432,
    rating: 3.9,
    ratingCount: 1068296,
    reviewsCount: 97111,
    language: 'English',
    genres: [
      'Contemporary',
      'Enemies To Lovers',
      'Fiction',
      'Contemporary Romance',
      'Audiobook',
      'Romance',
      'Chick Lit'
    ],
    readAt: 'Nov 27, 2022'
  }
]


By ISBN13
const result = await GoodReadsParser.getBook({ isbn: '1524759783' });
