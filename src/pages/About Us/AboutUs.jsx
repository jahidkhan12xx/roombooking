const AboutUs = () => {
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 font-lora ">
              {" "}
              <span className=" text-3xl text-red-800">Welcome</span> to The
              Royal Taj – Experience Luxury and Comfort At The Royal Taj, our
              mission is to provide you with an unforgettable experience. As a
              prestigious establishment, we blend opulence with comfort,
              offering a haven for travelers seeking a luxurious stay with
              world-class hospitality. Located in the heart of a bustling city,
              our hotel is a sanctuary of sophistication and tranquility. Our
              dedication to detail and service excellence sets us apart. We
              pride ourselves on the immaculate design of our rooms, the variety
              of dining options showcasing culinary delights, and the amenities
              we provide to cater to your needs. Whether you are here for
              business or leisure, we ensure a seamless stay that exceeds your
              expectations. The Royal Taj promises a refined experience with its
              well-appointed rooms, each exuding an air of elegance and
              modernity. Our commitment to exceptional service is the hallmark
              of our brand, ensuring that every guest feels not just welcomed
              but cherished. Join us at The Royal Taj and let us redefine your
              perception of luxury and comfort.
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="A group of People"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Our Story
            </h1>
            <p className="font-normal text-base leading-6 font-lora text-gray-600 ">
              <span className=" text-3xl text-red-800">The</span> story of The
              Royal Taj is one deeply rooted in a commitment to hospitality and
              excellence. Our journey began years ago with a vision to create a
              space where luxury meets convenience and where hospitality meets
              heartfelt service. From our humble beginnings, our dedication to
              providing a remarkable stay has been unwavering. Each stone of our
              establishment is steeped in the culture of warmth and grandeur. We
              have evolved, building a reputation as a sanctuary for discerning
              guests seeking the epitome of luxury. Its our goal who walks
              through our doors, a story is woven. We take pride in being part
              of these stories, ensuring that every visit is memorable, and
              every stay is an experience to cherish. Our story is not just
              about the hotel; it's about the connections we make and the
              moments we create. The Royal Taj remains committed to its legacy
              of elegance and hospitality. We invite you to be a part of our
              story and allow us to be a part of yours.
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                  alt="Alexa featured Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                  alt="Alexa featured Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Alexa
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                  alt="Olivia featured Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                  alt="Olivia featured Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Olivia
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                  alt="Liam featued Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                  alt="Liam featued Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Liam
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                  alt="Elijah featured img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                  alt="Elijah featured img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Elijah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
