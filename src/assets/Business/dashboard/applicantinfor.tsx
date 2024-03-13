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
      <div className="flex w-full justify-between items-center  bg-gray-100 h-full py-2">
        <Checkbox></Checkbox>
        <div>Nhat Khang</div>
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
        <div className="px-2 rounded-lg border-2 border-cyan-500 text-cyan-500">
          Hired
        </div>
        <div>9, October, 2019</div>
        <div>Frontend Developer</div>
        <Button className="flex items-end">See Application</Button>
      </div>
      <div className="flex w-full justify-evenly items-center py-2">
        <Checkbox></Checkbox>
        <div>Thanh Phong</div>
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
        <div className="px-2 rounded-lg border-2 border-red-500 text-red-500">
          Declined
        </div>
        <div>15, December, 2019</div>
        <div>Javascript Developer</div>
        <Button className="flex items-end">See Application</Button>
      </div>
      <div className="flex w-full justify-evenly items-center  bg-gray-100 h-full py-2">
        <Checkbox></Checkbox>
        <div>Dinh Khoi</div>
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
        <div className="px-2 rounded-lg border-2 border-orange-500 text-orange-500">
          Inteview
        </div>
        <div>9, October, 2019</div>
        <div>NET Devevloper</div>
        <Button className="flex items-end">See Application</Button>
      </div>
      <div className="flex w-full justify-evenly items-center py-2">
        <Checkbox></Checkbox>
        <div>Le Minh</div>
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
        <div className="px-2 rounded-lg border-2 border-blue text-blue">
          Shortlisted
        </div>
        <div>15, December, 2019</div>
        <div>Designer</div>
        <Button className="flex items-end">See Application</Button>
      </div>
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
            <TableHead>
              <Button variant="link" className="text-black  ">
                Job role <ChevronsUpDown />
              </Button>
            </TableHead>
            <TableHead className="flex justify-center">
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
                className="text-cyan-500 border-cyan-500 p-2 rounded-lg border-2"
              >
                Hired
              </Badge>
            </TableCell>
            <TableCell>9, October, 2019</TableCell>
            <TableCell className="flex justify-center">
              Frontend Developer
            </TableCell>
            <TableCell className=" ">
              <Button className="mx-auto">See Application</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
