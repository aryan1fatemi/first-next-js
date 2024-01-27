import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 
export function AboutProject({onClose,ProjectText}) {
  return (
    <Card className="mt-6 w-80 h-80 items-center z-10 absolute gap-2 border-4 border-indigo-800 rounded bg-indigo-800 text-white">
      <CardBody className="mb-2">
        <Typography variant="h5" color="blue-gray" className="mb-2 mt-1">
          Project Detail
        </Typography>
        <Typography>
          {ProjectText}
        </Typography>

      </CardBody>
      <CardFooter className="pt-0 flex flex-col">
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2 mb-2 text-white">
            Learn More
            <svg
              xmlns="http://www.w3.org/3000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
        <Button size="sm" variant="text" className="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 hover:bg-indigo-100 bg-indigo-900 border-indigo-800 rounded py-1 relative overflow-hidden px-5 mx-auto" onClick={onClose}>
          Close
        </Button>
      </CardFooter>
    </Card>
  );
}