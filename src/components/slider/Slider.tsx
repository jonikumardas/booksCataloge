import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slide from './slide';

const books = [
        { id:1,
          Title: "Fantasy of Quest for Truth",
          Author: "David Williams",
          Genre: "Fantasy",
          "Publication Date": "2021-11-10",
          image: "https://ttplimages.imgix.net/advtimages/16082023_123511_Foreign-Trade-Policy--9789391055004_Centax_Reprint_Book-Store-Featured-Banner.jpg?fm=jpg",
          price: 45,
          Reviews: [
            "Immersive world-building.",
            "An epic fantasy journey."
          ],
          Description: "Travel through time with intertwining stories that bridge eras, revealing the threads that connect generations. From the medieval countryside to the bustling streets of the industrial revolution, experience the echoes of the past in vivid detail."
        },
        {id:2,
          Title: "Romance by the Lakeside",
          Author: "Sophia Roberts",
          Genre: "Romance",
          "Publication Date": "2020-07-22",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9u9M_noih_SP9gHeU_4kFaKnvLjmP7nhgPw&usqp=CAU",
          price: 32,
          Reviews: [
            "Heartwarming and beautifully written.",
            "Perfect for a cozy evening."
          ],
          Description: "Dive headfirst into a universe of technological marvels and extraterrestrial encounters. Through a collection of thought-provoking tales, explore the intricate dance between humanity's ambition and the mysteries of the cosmos."
        },
        {id:3,
          Title: "Sci-Fi Chronicle the Stars",
          Author: "Michael Anderson",
          Genre: "Science Fiction",
          "Publication Date": "2023-04-05",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKlqb1RSP3Ibx0g4MpbJ19X_THBSui-SCPEy302mdxartowav_RrIc9TR2BsHTzJ21Bk&usqp=CAU",
          price: 37,
          Reviews: [
            "Mind-bending concepts!",
            "A must-read for sci-fi enthusiasts."
          ],
          Description: "Escape to the idyllic lakeside setting where Olivia and James's worlds collide, igniting a passionate romance that transcends time and challenges. Amidst picturesque landscapes and heartfelt emotions, this novel celebrates the magic of love."
        },
        {id:4,
          Title: "Historical of the Past",
          Author: "Emily Thompson",
          Genre: "Historical Fiction",
          "Publication Date": "2019-09-08",
          image: "https://www.historic-newspapers.co.uk/wp-content/uploads/sites/5/2023/03/ns-dmi-football-rangers-10.jpg",
          price: 23,
          Reviews: [
            "Brings history to life.",
            "Engaging characters and setting."
          ],
          Description: "Journey into the enchanting land of Arindor, where unlikely heroes must unite to confront an ancient evil that threatens to plunge the realm into darkness. With magic, monsters, and moments of triumph, this tale explores themes of courage, friendship, and destiny."
        },
        {id:5,
          Title: " The Enigmatic Detective",
          Author: "Richard Holmes",
          Genre: "Mystery",
          "Publication Date": "2023-07-14",
          image: "https://www.thesecret.tv/wp-content/uploads/2015/04/the-secret-book-cover-img.png",
          price: 47,
          Reviews: [
            "Classic mystery feel with a modern twist.",
            "Couldn't guess the ending!"
          ],
          Description: "Enter the shadowy world of intrigue and suspense as Detective Laura Simmons races against time to solve the perplexing puzzle of the hidden mansion. Uncover dark secrets, follow cryptic clues, and immerse yourself in a mystery that will leave you breathless."
        },
        {id:6,
          Title: "Realm of Magic & Sorcery",
          Author: "Luna Evergreen",
          Genre: "Fantasy",
          "Publication Date": "2022-09-30",
          image: "https://cdn.waterstones.com/images/00290047-580x483.jpeg",
          price: 25,
          Reviews: [
            "A magical world that enchants readers.",
            "Spellbinding storytelling."
          ],
          Description: "Embark on an epic journey with young adventurer Max as he sets out to uncover ancient secrets and conquer dangerous lands. Filled with daring escapades, unexpected alliances, and heart-pounding challenges, this book promises an unforgettable adventure for all ages."
        }
];
const BookSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll:1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='lg:mx-20'>
      <Slider {...settings}>
        {books.map((book) => (<Slide key={book.id}slidedata={book}        
        />
        ))}
      </Slider>
    </div>
  );
};

export default BookSlider;
