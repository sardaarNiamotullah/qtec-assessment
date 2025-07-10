export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  description: string;
  rating: number;
  reviews: number;
  pages: number;
  published: string;
  publisher: string;
  isbn: string;
  genre: string;
  image: string;
}

export const featuredBooks: Book[] = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 19.99,
    description: "Atomic Habits explores the power of small changes and how they can lead to remarkable results over time. James Clear provides a comprehensive framework for building good habits and breaking bad ones using science-backed strategies. Through actionable advice, real-life examples, and a deep dive into behavioral psychology, this book teaches you how to design your environment for success and how identity plays a central role in habit formation. Whether you're looking to improve your health, productivity, or mindset, this book offers a proven path to long-term growth.",
    rating: 4.8,
    reviews: 12500,
    pages: 320,
    published: "October 16, 2018",
    publisher: "Avery",
    isbn: "0735211299",
    genre: "Self-help, Personal Development",
    image: "/atomic-habits.png"
  },
  {
    id: 2,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    price: 18.99,
    description: "Stephen R. Covey presents a holistic, principle-centered approach to solving personal and professional problems. Through timeless wisdom and practical examples, he explains how to align character with universal principles to become a more effective and fulfilled person. Each habit builds on the next — from taking personal responsibility to synergizing with others and continually renewing yourself. This classic self-help guide has empowered millions worldwide to live with integrity, purpose, and balance.",
    rating: 4.7,
    reviews: 9800,
    pages: 381,
    published: "August 15, 1989",
    publisher: "Free Press",
    isbn: "0743269519",
    genre: "Self-help, Business",
    image: "/7-habits.png"
  },
  {
    id: 3,
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    price: 16.5,
    description: "First published in 1936, Dale Carnegie's classic book remains a cornerstone of self-help literature. With timeless advice on communication, persuasion, and relationship-building, this book teaches how to make others feel important and win them over with honesty and empathy. Carnegie's principles — such as showing genuine interest in others, remembering names, and admitting your mistakes — are just as relevant today in personal life and business. It's a must-read for anyone who wants to improve their interpersonal skills.",
    rating: 4.6,
    reviews: 15000,
    pages: 288,
    published: "October 1936",
    publisher: "Simon & Schuster",
    isbn: "0671027034",
    genre: "Self-help, Communication",
    image: "/win-friends.png"
  },
  {
    id: 4,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    price: 17.95,
    description: "Eckhart Tolle's spiritual guide to mindfulness and presence challenges readers to abandon the constant chatter of the mind and live fully in the present moment. With a blend of wisdom drawn from many spiritual traditions, Tolle discusses the root causes of suffering and anxiety — namely, our identification with thoughts and the ego. By learning to anchor consciousness in the Now, readers can transcend pain, find peace, and awaken to a deeper sense of being. A transformative book for anyone on a path of inner awakening.",
    rating: 4.5,
    reviews: 8700,
    pages: 229,
    published: "January 1, 1997",
    publisher: "New World Library",
    isbn: "1577314808",
    genre: "Spirituality, Self-help",
    image: "/power-of-now.png"
  },
  {
    id: 5,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 14.99,
    description: "Based on decades of research on the most successful people of his time, Napoleon Hill distills the philosophy of success into 13 key principles. From desire and faith to persistence and autosuggestion, this book teaches readers how to turn their thoughts into riches — both financial and personal. While the language is rooted in the 20th century, its message remains powerful: that success begins in the mind. This classic is a motivational blueprint for those who aspire to achieve their biggest dreams.",
    rating: 4.4,
    reviews: 11200,
    pages: 238,
    published: "March 1, 1937",
    publisher: "The Ralston Society",
    isbn: "1585424331",
    genre: "Self-help, Business",
    image: "/think-grow-rich.png"
  },
  {
    id: 6,
    title: "Can't Hurt Me",
    author: "David Goggins",
    price: 22.75,
    description: "David Goggins, a former Navy SEAL and ultramarathon runner, shares his incredible life story and the mental strategies he used to transform from an overweight, abused child into one of the world's toughest men. 'Can't Hurt Me' is not just a memoir — it's a challenge to push beyond pain, fear, and excuses. Through powerful anecdotes and raw honesty, Goggins reveals how we can tap into our '40% Rule' to unlock untapped potential. It's a gritty, no-nonsense guide to mental toughness, resilience, and embracing discomfort for growth.",
    rating: 4.9,
    reviews: 9400,
    pages: 364,
    published: "December 4, 2018",
    publisher: "Lioncrest Publishing",
    isbn: "1544512277",
    genre: "Memoir, Self-help",
    image: "/cant-hurt-me.png"
  },
  {
    id: 7,
    title: "Deep Work",
    author: "Cal Newport",
    price: 20.0,
    description: "In an age of constant distractions and shallow work, Cal Newport makes the case for cultivating 'deep work' — the ability to focus without distraction on cognitively demanding tasks. Newport argues that this skill is becoming increasingly rare and valuable in today's economy. Through research and practical advice, he outlines strategies for training your mind, eliminating distractions, and creating a work life centered around focused productivity. A must-read for knowledge workers, creatives, and anyone who wants to produce high-quality results in less time.",
    rating: 4.6,
    reviews: 7600,
    pages: 304,
    published: "January 5, 2016",
    publisher: "Grand Central Publishing",
    isbn: "1455586692",
    genre: "Productivity, Business",
    image: "/deep-work.png"
  },
  {
    id: 8,
    title: "Grit",
    author: "Angela Duckworth",
    price: 18.25,
    description: "Angela Duckworth explores the idea that talent alone is not the key to success — rather, it's grit: a blend of passion and perseverance for long-term goals. Drawing from her research as a psychologist, she delves into why some people achieve extraordinary things while others fall short. Filled with inspiring stories, scientific insights, and practical advice, 'Grit' encourages readers to develop mental stamina, resilience, and a growth mindset to thrive in the face of challenges. It's a motivating read for students, professionals, and anyone pursuing mastery.",
    rating: 4.5,
    reviews: 6800,
    pages: 333,
    published: "May 3, 2016",
    publisher: "Scribner",
    isbn: "1501111108",
    genre: "Psychology, Self-help",
    image: "/grit.png"
  }
];