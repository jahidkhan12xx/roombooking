import moment from "moment/moment";
import Rating from 'react-rating-stars-component';


const ReviewCars = ({items}) => {

    const time = items.currentTimestamp;
    const date = moment(time).format('YYYY-MM-DD HH:mm:ss');
    
    return (
        <div>
            <div className="relative h-full flex w-full mx-6 font-great-vibes flex-col rounded-xl bg-transparent bg-clip-border text-gray-200 shadow-none">
  <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-200 bg-transparent shadow-none rounded-xl bg-clip-border">
    
    <div className="flex w-full flex-col gap-0.5">
      <div className="flex items-center justify-between">
        <h5 className="block  text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {items.userName}
        </h5>
        
        
      </div>
      <p className="block  text-base antialiased font-light leading-relaxed text-blue-gray-900">
        {date}
      </p>
      <Rating
      value={items.rating}
      edit={false}
      size={24} // Adjust the size as needed
      activeColor="#ffd700" // Set the star color
      isHalf={false} // To display only full stars
    />
    </div>
  </div>
  <div className="p-0 mb-6">
    <p className="block  text-base antialiased font-light leading-relaxed text-inherit">
      {items.review}
    </p>
  </div>
</div>
        </div>
    );
};

export default ReviewCars;