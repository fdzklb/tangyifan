import React from "react";
import { fetchUrl } from "@/lib/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { InferGetStaticPropsType } from "next";

type Repo = {
  first_name: string
  last_name: string
  email: string
  phone: string
  content: string
}

export default async function Customers() {
  const res = await fetch(`${fetchUrl}/customers`);
  const repo = await res.json();
  return (
    <div className="relative flex justify-center sm:w-full md:w-3/4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>email</TableHead>
            <TableHead>first_name</TableHead>
            <TableHead>last_name</TableHead>
            <TableHead>phone</TableHead>
            <TableHead>content</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {repo.map((invoice: Repo) => (
            <TableRow key={invoice.email}>
              <TableCell className="font-medium">
                {invoice.email}
              </TableCell>
              <TableCell className="font-medium">
                {invoice.first_name}
              </TableCell>
              <TableCell>{invoice.last_name}</TableCell>
              <TableCell>{invoice.phone}</TableCell>
              <TableCell>{invoice.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
