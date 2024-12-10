import { Carousel } from "@material-tailwind/react";

function CarouselTransition() {
  return (
    <div className="mt-10">

<h2 className="font-extrabold text-3xl underline underline-offset-4 mb-10"> Our Popular Food </h2>
      <Carousel
        transition={{ duration: 1 }}
        className="rounded-xl w-72 md:w-[500px] mx-auto "
      > 
    
        <div>
          <img
            src="https://images.getrecipekit.com/20231014063236-andy-20cooks-20-20mutton-20biryani-20lamb.jpg?aspect_ratio=4:3&quality=90&"
            alt="image 1"
            className="h-full w-full object-cover mb-10"
          />
          <p>Biriyani </p>
        </div>

        <div>
          <img
            src="https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=MOm3sfIfL22URV6juSCxpA3yfr4O63yJUV5vitufR7Y="
            alt="image 2"
            className="h-full w-full object-cover mb-10"
          />
          <p>veg thali</p>
        </div>

        <div>
          <img
            src="https://mrbrownbakery.com/image/images/GJ7uCwGiteTF24HTWBclkziVTdhpQeZWH23MvQfq.jpeg?p=full"
            alt="image 3"
            className="h-full w-full object-cover mb-10"
          />
          <p>cake</p>
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/1217611897/photo/grilled-chicken-breasts-with-thyme-garlic-and-lemon-slices-on-a-grill-pan-close-up.jpg?s=612x612&w=0&k=20&c=iobxGp_U-v45kgcR1Uv4QVhlkVFpUjsozJQQ6_tF1wY="
            alt="image 4"
            className="h-full w-full object-cover mb-10"
          />
          <p>Grilled chicken</p>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselTransition;
