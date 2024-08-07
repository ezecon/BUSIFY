import { Carousel } from "@material-tailwind/react";
 
export function Gallary() {
  return (
    <Carousel loop={true} autoplay={true} className="rounded-xl">
      <img
        src="1.jpg"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
    
      <img
        src="2.jpg"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
    
      <img
        src="3.jpg"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
    
      <img
        src="4.jpg"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
    
      <img
        src="5.jpg"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
    
    </Carousel>
  );
}