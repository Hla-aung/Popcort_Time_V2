export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.5,
        swipe: true,
        swipeToSlide: true,
        arrows: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        swipe: true,
        swipeToSlide: true,
        arrows: false,
      }
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 6,
        swipe: true,
        swipeToSlide: true,
        arrows: true,
      }
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 7,
        swipe: true,
        swipeToSlide: true,
        arrows: true,
      }
    },
  ],
};

export const latestSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1.5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        swipe: true,
        swipeToSlide: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        swipe: true,
        swipeToSlide: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      }
    }
  ],
};

export const profileSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 7.5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.5,
        swipe: true,
        swipeToSlide: true,
        arrows: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 6,
        swipe: true,
        swipeToSlide: true,
        arrows: false,
      }
    }
  ],
};

export const videoSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        swipe: true,
        swipeToSlide: true,
        arrows: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1.5,
        swipe: true,
        swipeToSlide: true,
        arrows: false,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        swipe: true,
        swipeToSlide: true,
        arrows: false,
      },
    },
  ],
};