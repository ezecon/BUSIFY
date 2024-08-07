
import { LuBadgeCheck } from "react-icons/lu";
export default function WhyUs() {
  return (
    <div>
        <h1 className="text-2xl text-[goldenrod] font-bold montserrat-alternates-nice py-4">Why book with us?</h1>
        <div className="flex gap-2 montserrat-alternates-extralight my-5">
            <div className=" shadow-lg rounded-lg w-1/4">
                <LuBadgeCheck/>
                <h1 className="font-bold text-[goldenrod]">Comfortable Bus</h1>
                <p>We have very large leg space in between seats.You can spend 12 hours without any discomfort in our seats</p>

            </div>
            <div className=" shadow-lg rounded-lg w-1/4">
                <LuBadgeCheck/>
                <h1 className="font-bold text-[goldenrod]">Gps Navigation</h1>
                <p>All of our buses are equipped with GPS and Camera for safety of the valued passenger.</p>

            </div>
            <div className=" shadow-lg rounded-lg w-1/4">
                <LuBadgeCheck/>
                <h1 className="font-bold text-[goldenrod]">Buy Tickets easily</h1>
                <p>You can buy ticket from our wide range of ticketing booth and online. You can book your seat through our call center +8809606188188</p>

            </div>
            <div className=" shadow-lg rounded-lg w-1/4">
                <LuBadgeCheck/>
                <h1 className="font-bold text-[goldenrod]">Entertainment On board</h1>
                <p>Our buss are equipped with full HD Display and DVD player to play drama , music and movies in order to make the journey more enjoyable.</p>

            </div>
        </div>
    </div>
  )
}   
   