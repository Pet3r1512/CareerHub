import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function UserTable() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[250px]">Full Name</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead className="w-[150px]">Email</TableHead>
          <TableHead className="w-[150px]">Phone Number</TableHead>
          <TableHead className="text-right max-w-[250px]">Location</TableHead>
          <TableHead className="text-right">Occupation</TableHead>
          <TableHead className="w-[100px] text-right">Created At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Pham Tang Thanh Phong</TableCell>
          <TableCell>Male</TableCell>
          <TableCell>pttp15122002@gmail.com</TableCell>
          <TableCell className="text-right">0768058382</TableCell>
          <TableCell className="text-right truncate max-w-[250px]">
            335 Kenh Tan Hoa, Hoa Thanh, Tan Phu
          </TableCell>
          <TableCell>Information Technology</TableCell>
          <TableCell className="text-right">15-12-2002</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
