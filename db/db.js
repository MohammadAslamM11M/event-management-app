import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const events = [
  {
    id: 1,
    name: "Tech Innovators Summit",
    location: "San Francisco, CA",
    date: "2024-09-15",
    time: "09:00 AM",
    tags: ["Technology", "Innovation", "Conference"],
    image: "https://example.com/images/tech-innovators-summit.jpg",
    artist: "John Doe",
    price: 850,
  },
  {
    id: 2,
    name: "Global Music Fest",
    location: "Austin, TX",
    date: "2024-10-10",
    time: "04:00 PM",
    tags: ["Music", "Festival", "Live"],
    image: "https://example.com/images/global-music-fest.jpg",
    artist: "Jane Smith",
    price: 250,
  },
  {
    id: 3,
    name: "Art & Culture Expo",
    location: "New York, NY",
    date: "2024-11-05",
    time: "11:00 AM",
    tags: ["Art", "Exhibition", "Culture"],
    image: "https://example.com/images/art-culture-expo.jpg",
    artist: "Alice Johnson",
    price: 400,
  },
  {
    id: 4,
    name: "StartUp Grind",
    location: "Los Angeles, CA",
    date: "2024-09-25",
    time: "01:00 PM",
    tags: ["Business", "Networking", "Technology"],
    image: "https://example.com/images/startup-grind.jpg",
    artist: "Bob Brown",
    price: 600,
  },
  {
    id: 5,
    name: "Food Truck Fiesta",
    location: "Portland, OR",
    date: "2024-08-22",
    time: "06:00 PM",
    tags: ["Food", "Festival", "Community"],
    image: "https://example.com/images/food-truck-fiesta.jpg",
    artist: "Carlos Garcia",
    price: 150,
  },
  {
    id: 6,
    name: "Health & Wellness Expo",
    location: "Chicago, IL",
    date: "2024-10-20",
    time: "09:00 AM",
    tags: ["Health", "Wellness", "Exhibition"],
    image: "https://example.com/images/health-wellness-expo.jpg",
    artist: "Emily Davis",
    price: 300,
  },
  {
    id: 7,
    name: "Comedy Night",
    location: "Las Vegas, NV",
    date: "2024-09-12",
    time: "08:00 PM",
    tags: ["Comedy", "Live", "Entertainment"],
    image: "https://example.com/images/comedy-night.jpg",
    artist: "David Miller",
    price: 450,
  },
  {
    id: 8,
    name: "Film & Documentary Festival",
    location: "Seattle, WA",
    date: "2024-11-15",
    time: "03:00 PM",
    tags: ["Film", "Documentary", "Festival"],
    image: "https://example.com/images/film-documentary-festival.jpg",
    artist: "Sophia Wilson",
    price: 550,
  },
  {
    id: 9,
    name: "Jazz Evening",
    location: "New Orleans, LA",
    date: "2024-12-10",
    time: "07:00 PM",
    tags: ["Music", "Jazz", "Live"],
    image: "https://example.com/images/jazz-evening.jpg",
    artist: "Michael Clark",
    price: 700,
  },
  {
    id: 10,
    name: "Startup Pitch Day",
    location: "Boston, MA",
    date: "2024-09-30",
    time: "10:00 AM",
    tags: ["Business", "Startup", "Investment"],
    image: "https://example.com/images/startup-pitch-day.jpg",
    artist: "Olivia Martinez",
    price: 950,
  },
  {
    id: 11,
    name: "Marathon for Charity",
    location: "New York, NY",
    date: "2024-11-20",
    time: "06:00 AM",
    tags: ["Sports", "Marathon", "Charity"],
    image: "https://example.com/images/marathon-for-charity.jpg",
    artist: "James Lee",
    price: 120,
  },
  {
    id: 12,
    name: "Tech Talk Live",
    location: "San Francisco, CA",
    date: "2024-10-05",
    time: "05:00 PM",
    tags: ["Technology", "Talk", "Live"],
    image: "https://example.com/images/tech-talk-live.jpg",
    artist: "Sophia Gonzalez",
    price: 700,
  },
  {
    id: 13,
    name: "Classical Music Concert",
    location: "Vienna, Austria",
    date: "2024-10-22",
    time: "07:30 PM",
    tags: ["Music", "Classical", "Concert"],
    image: "https://example.com/images/classical-music-concert.jpg",
    artist: "Sebastian Wagner",
    price: 480,
  },
  {
    id: 14,
    name: "Winter Art Fair",
    location: "Toronto, Canada",
    date: "2024-12-05",
    time: "09:00 AM",
    tags: ["Art", "Fair", "Winter"],
    image: "https://example.com/images/winter-art-fair.jpg",
    artist: "Lily Thompson",
    price: 300,
  },
  {
    id: 15,
    name: "Yoga Retreat",
    location: "Sedona, AZ",
    date: "2024-09-18",
    time: "08:00 AM",
    tags: ["Health", "Wellness", "Yoga"],
    image: "https://example.com/images/yoga-retreat.jpg",
    artist: "Isabella Hernandez",
    price: 950,
  },
  {
    id: 16,
    name: "International Book Fair",
    location: "Frankfurt, Germany",
    date: "2024-10-17",
    time: "09:00 AM",
    tags: ["Books", "Literature", "Fair"],
    image: "https://example.com/images/international-book-fair.jpg",
    artist: "Gabriel Schmidt",
    price: 380,
  },
  {
    id: 17,
    name: "Halloween Parade",
    location: "Salem, MA",
    date: "2024-10-31",
    time: "07:00 PM",
    tags: ["Holiday", "Halloween", "Parade"],
    image: "https://example.com/images/halloween-parade.jpg",
    artist: "Charlotte King",
    price: 110,
  },
  {
    id: 18,
    name: "Christmas Market",
    location: "Berlin, Germany",
    date: "2024-12-01",
    time: "10:00 AM",
    tags: ["Holiday", "Christmas", "Market"],
    image: "https://example.com/images/christmas-market.jpg",
    artist: "Daniel Meier",
    price: 550,
  },
  {
    id: 19,
    name: "New Year's Eve Gala",
    location: "Paris, France",
    date: "2024-12-31",
    time: "08:00 PM",
    tags: ["Holiday", "New Year", "Gala"],
    image: "https://example.com/images/new-years-eve-gala.jpg",
    artist: "Amelia Dupont",
    price: 900,
  },
  {
    id: 20,
    name: "Culinary Workshop",
    location: "Rome, Italy",
    date: "2024-11-12",
    time: "02:00 PM",
    tags: ["Food", "Workshop", "Culinary"],
    image: "https://example.com/images/culinary-workshop.jpg",
    artist: "Marco Rossi",
    price: 400,
  },
  {
    id: 21,
    name: "Fashion Week",
    location: "Milan, Italy",
    date: "2024-09-21",
    time: "09:00 AM",
    tags: ["Fashion", "Runway", "Week"],
    image: "https://example.com/images/fashion-week.jpg",
    artist: "Elena Ricci",
    price: 750,
  },
  {
    id: 22,
    name: "Science Expo",
    location: "Tokyo, Japan",
    date: "2024-10-27",
    time: "10:00 AM",
    tags: ["Science", "Exhibition", "Technology"],
    image: "https://example.com/images/science-expo.jpg",
    artist: "Yuki Tanaka",
    price: 320,
  },
];
const artists = [
  {
    id: 1,
    name: "John Doe",
    location: "New York, USA",
    dateOfBirth: "1970-01-01",
    description: "Abstract expressionist",
  },
  {
    name: "Jane Smith",
    location: "London, UK",
    dateOfBirth: "1980-02-15",
    description: "Contemporary sculptor",
  },
  {
    name: "Alice Johnson",
    location: "Paris, France",
    dateOfBirth: "1990-03-30",
    description: "Impressionist painter",
  },
  {
    name: "Bob Brown",
    location: "Tokyo, Japan",
    dateOfBirth: "1975-04-12",
    description: "Digital artist",
  },
  {
    name: "Carlos Garcia",
    location: "Madrid, Spain",
    dateOfBirth: "1985-05-28",
    description: "Street artist",
  },
  {
    name: "Emily Davis",
    location: "Berlin, Germany",
    dateOfBirth: "1995-06-05",
    description: "Photographer",
  },
  {
    name: "David Miller",
    location: "Rome, Italy",
    dateOfBirth: "1972-07-18",
    description: "Classical painter",
  },
  {
    name: "Sophia Wilson",
    location: "Sydney, Australia",
    dateOfBirth: "1988-08-21",
    description: "Mixed media artist",
  },
  {
    name: "Michael Clark",
    location: "Toronto, Canada",
    dateOfBirth: "1992-09-09",
    description: "Graphic designer",
  },
  {
    name: "Olivia Martinez",
    location: "Mexico City, Mexico",
    dateOfBirth: "1979-10-25",
    description: "Textile artist",
  },
  {
    name: "James Lee",
    location: "Seoul, South Korea",
    dateOfBirth: "1986-11-11",
    description: "Illustrator",
  },
  {
    name: "Sophia Gonzalez",
    location: "Rio de Janeiro, Brazil",
    dateOfBirth: "1998-12-03",
    description: "Ceramic artist",
  },
  {
    name: "Sebastian Wagner",
    location: "Moscow, Russia",
    dateOfBirth: "1974-01-16",
    description: "Performance artist",
  },
  {
    name: "Lily Thompson",
    location: "Dubai, UAE",
    dateOfBirth: "1983-02-29",
    description: "Installation artist",
  },
  {
    name: "Isabella Hernandez",
    location: "Mumbai, India",
    dateOfBirth: "1996-03-14",
    description: "Fiber artist",
  },
  {
    name: "Gabriel Schmidt",
    location: "Shanghai, China",
    dateOfBirth: "1971-04-27",
    description: "Video artist",
  },
  {
    name: "Charlotte King",
    location: "Cairo, Egypt",
    dateOfBirth: "1989-05-06",
    description: "Sound artist",
  },
  {
    name: "Daniel Meier",
    location: "Istanbul, Turkey",
    dateOfBirth: "1993-06-19",
    description: "Glass artist",
  },
  {
    name: "Amelia Dupont",
    location: "Buenos Aires, Argentina",
    dateOfBirth: "1978-07-02",
    description: "Printmaker",
  },
  {
    name: "Marco Rossi",
    location: "Johannesburg, South Africa",
    dateOfBirth: "1987-08-15",
    description: "Metalworker",
  },
  {
    name: "Elena Ricci",
    location: "Amsterdam, Netherlands",
    dateOfBirth: "1997-09-28",
    description: "Jewellery designer",
  },
  {
    name: "Yuki Tanaka",
    location: "Kyoto, Japan",
    dateOfBirth: "1975-10-10",
    description: "Calligrapher",
  },
].map((artist) => ({
  ...artist,
  id: Math.floor(Math.random() * 100000), // Generate a random ID
}));
const tags = [
  { id: 167382, name: "Technology" },
  { id: 947263, name: "Innovation" },
  { id: 528394, name: "Conference" },
  { id: 619375, name: "Music" },
  { id: 283749, name: "Festival" },
  { id: 759263, name: "Live" },
  { id: 374859, name: "Art" },
  { id: 826394, name: "Exhibition" },
  { id: 194728, name: "Culture" },
  { id: 536294, name: "Business" },
  { id: 917365, name: "Networking" },
  { id: 284937, name: "Food" },
  { id: 638492, name: "Community" },
  { id: 749263, name: "Health" },
  { id: 183749, name: "Wellness" },
  { id: 529384, name: "Comedy" },
  { id: 917364, name: "Entertainment" },
  { id: 283746, name: "Film" },
  { id: 628394, name: "Documentary" },
  { id: 749261, name: "Jazz" },
  { id: 182739, name: "Startup" },
  { id: 529382, name: "Investment" },
  { id: 918374, name: "Sports" },
  { id: 284935, name: "Marathon" },
  { id: 639482, name: "Charity" },
  { id: 759260, name: "Talk" },
  { id: 374857, name: "Classical" },
  { id: 826392, name: "Concert" },
  { id: 194726, name: "Winter" },
  { id: 536292, name: "Fair" },
  { id: 917362, name: "Yoga" },
  { id: 283744, name: "Books" },
  { id: 628392, name: "Literature" },
  { id: 749259, name: "Holiday" },
  { id: 182737, name: "Halloween" },
  { id: 529380, name: "Parade" },
  { id: 918372, name: "Christmas" },
  { id: 284933, name: "Market" },
  { id: 639480, name: "New Year" },
  { id: 759258, name: "Gala" },
  { id: 374855, name: "Workshop" },
  { id: 826390, name: "Culinary" },
  { id: 194724, name: "Fashion" },
  { id: 536290, name: "Runway" },
  { id: 917360, name: "Week" },
  { id: 283742, name: "Science" },
];

const defaultData = {
  events,
  artists,
  tags,
};

const db = new Low(new JSONFile("db.json"), defaultData);
export default db;
