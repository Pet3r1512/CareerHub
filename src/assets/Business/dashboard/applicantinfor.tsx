import { Checkbox } from "@/components/ui/checkbox";
import Page from "../_UI/Page";
import { ChevronsUpDown, GripHorizontal, Star } from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ApplicantInfor() {
  return (
    <div className="flex border-2  flex-col items-center mt-[25px]">

      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox></Checkbox>
            </TableHead>
            <TableHead className="w-[100px]">
              <Button variant="link" className="text-black">
                Full Name <ChevronsUpDown />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="link" className="text-black">
                Score
                <ChevronsUpDown />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="link" className="text-black">
                Hiring Stage <ChevronsUpDown />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="link" className="text-black">
                Applied Date <ChevronsUpDown />
              </Button>
            </TableHead>
            <TableHead className="flex justify-center">
              <Button variant="link" className="text-black flex justify-center  ">
                Job role <ChevronsUpDown />
              </Button>
            </TableHead>
            <TableHead  >
              <Button variant="link" className="text-black">
                Action <ChevronsUpDown />
              </Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Checkbox></Checkbox>
            </TableCell>
            <TableCell>Nhat Khang</TableCell>
            <TableCell>
              <div className="flex flex-row">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--emojione"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    fill="#ffce31"
                  ></path>
                </svg>
                5.0
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className="text-cyan-500 border-cyan-500 p-2 rounded-lg border-2 cursor-default"
              >
                Hired
              </Badge>
            </TableCell>
            <TableCell>9, October, 2019</TableCell>
            <TableCell className="flex justify-center">
              Frontend Developer
            </TableCell>
            <TableCell className=" ">
            <Button className="mx-auto bg-gray-50 border-2 border-primary text-primary hover:text-white">See Application</Button>            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox></Checkbox>
            </TableCell>
            <TableCell>Thanh Phong</TableCell>
            <TableCell>
              <div className="flex flex-row">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--emojione"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    fill="#ffce31"
                  ></path>
                </svg>
                5.0
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className="text-orange-500 border-orange-500 p-2 rounded-lg border-2 cursor-default"
              >
                Interview
              </Badge>
            </TableCell>
            <TableCell>1, October, 2019</TableCell>
            <TableCell className="flex justify-center">
            NET Devevloper
            </TableCell>
            <TableCell className=" ">
            <Button className="mx-auto bg-gray-50 border-2 border-primary text-primary hover:text-white">See Application</Button>            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox></Checkbox>
            </TableCell>
            <TableCell>Dinh Khoi</TableCell>
            <TableCell>
              <div className="flex flex-row">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--emojione"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    fill="#ffce31"
                  ></path>
                </svg>
                3.2
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className="text-red-500 border-red-500 p-2 rounded-lg border-2 cursor-default"
              >
                Declined
              </Badge>
            </TableCell>
            <TableCell>1, December, 2020</TableCell>
            <TableCell className="flex justify-center">
            Golang Dev
            </TableCell>
            <TableCell className=" ">
            <Button className="mx-auto bg-gray-50 border-2 border-primary text-primary hover:text-white">See Application</Button>            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox></Checkbox>
            </TableCell>
            <TableCell>Le Minh</TableCell>
            <TableCell>
              <div className="flex flex-row">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--emojione"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    fill="#ffce31"
                  ></path>
                </svg>
                3.0
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className="text-red-500 border-red-500 p-2 rounded-lg border-2 cursor-default"
              >
                Declined
              </Badge>
            </TableCell>
            <TableCell>12, November, 2023</TableCell>
            <TableCell className="flex justify-center">
            Javascript Dev
            </TableCell>
            <TableCell className=" ">
            <Button className="mx-auto bg-gray-50 border-2 border-primary text-primary hover:text-white">See Application</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox></Checkbox>
            </TableCell>
            <TableCell>Linh Dan </TableCell>
            <TableCell>
              <div className="flex flex-row">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--emojione"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    fill="#ffce31"
                  ></path>
                </svg>
                1.0
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className="text-cyan-700 border-cyan-700 p-2 rounded-lg border-2 cursor-default"
              >
                Interviewed
              </Badge>
            </TableCell>
            <TableCell>22, January, 2023</TableCell>
            <TableCell className="flex justify-center">
            Graphic Designer
            </TableCell>
            <TableCell className=" ">
            <Button className="mx-auto bg-gray-50 border-2 border-primary text-primary hover:text-white">See Application</Button>            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox></Checkbox>
            </TableCell>
            <TableCell>Tan Phat </TableCell>
            <TableCell>
              <div className="flex flex-row">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--emojione"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    fill="#ffce31"
                  ></path>
                </svg>
                2.3
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className="text-pink-700 border-pink-700 p-2 rounded-lg border-2 cursor-default"
              >
                Shortlisted
              </Badge>
            </TableCell>
            <TableCell>22, January, 2023</TableCell>
            <TableCell className="flex justify-center">
             Designer
            </TableCell>
            <TableCell>
              <Button className="mx-auto bg-gray-50 border-2 border-primary text-primary hover:text-white">See Application</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox></Checkbox>
            </TableCell>
            <TableCell>Quang Huy </TableCell>
            <TableCell>
              <div className="flex flex-row">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--emojione"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    fill="#ffce31"
                  ></path>
                </svg>
                4.0
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className="text-orange-500 border-orange-500 p-2 rounded-lg border-2 cursor-default"
              >
                Interview
              </Badge>
            </TableCell>
            <TableCell>12, March, 2023</TableCell>
            <TableCell className="flex justify-center">
             Frontend Developer
            </TableCell>
            <TableCell>
              <Button className="mx-auto bg-gray-50 border-2 border-primary text-primary hover:text-white">See Application</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox></Checkbox>
            </TableCell>
            <TableCell>Sang </TableCell>
            <TableCell>
              <div className="flex flex-row">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--emojione"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    fill="#ffce31"
                  ></path>
                </svg>
                2.5
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className="text-cyan-500 border-cyan-500 p-2 rounded-lg border-2 cursor-default"
              >
                Hired
              </Badge>
            </TableCell>
            <TableCell>25, April, 2023</TableCell>
            <TableCell className="flex justify-center">
             Frontend Developer
            </TableCell>
            <TableCell>
              <Button className="mx-auto bg-gray-50 border-2 border-primary text-primary hover:text-white">See Application</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
