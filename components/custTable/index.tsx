'use client'

import React, { Suspense, useState, useEffect } from "react";
import { fetchUrl } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Repo = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  content: string;
};

const CustomersPage = () => {
  const [customers, setCustomers] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${fetchUrl}/customers`);
        if (!res.ok) {
          throw new Error('Failed to fetch customers');
        }
        const data = await res.json();
        setCustomers(data);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching the data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
          {customers.map((customer) => (
            <TableRow key={customer.email}>
              <TableCell className="font-medium">{customer.email}</TableCell>
              <TableCell className="font-medium">{customer.first_name}</TableCell>
              <TableCell>{customer.last_name}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>{customer.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomersPage;