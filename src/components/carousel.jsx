import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const states = [
  { name: "Himachal Pradesh", path: "/HimanchalPradesh" },
  { name: "Punjab", path: "/Punjab" },
  { name: "Rajasthan", path: "/Rajasthan" },
  { name: "Chandigarh", path: "/Chandigarh" },
  { name: "Pondicherry", path: "/Pondicherry" },
  { name: "Gujarat", path: "/Gujrat" }
];

export function CarouselOrientation() {
  return (
    <>
    <Carousel
      opts={{ align: "start" }}
      orientation="vertical"
      className="w-full max-w-xs"
      >
      <CarouselContent className="-mt-1 h-[300px]">
        {states.map((state, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{state.name}</span>
                  <Link to={state.path} className="mt-2 text-blue-500 hover:underline">Visit {state.name}</Link>
                </CardContent>
              </Card>
            </div>

          </CarouselItem >
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </>
  );
}
