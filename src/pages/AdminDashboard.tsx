import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHead, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Plus } from "lucide-react";

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products.json");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">UA Lowcost Admin</h1>

      <Tabs defaultValue="products">
        <TabsList className="mb-4">
          <TabsTrigger value="products">Товари</TabsTrigger>
          <TabsTrigger value="orders">Замовлення</TabsTrigger>
          <TabsTrigger value="suppliers">Постачальники</TabsTrigger>
        </TabsList>

        <TabsContent value="products">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <Input placeholder="Пошук товарів..." className="w-1/3" />
                <Button><Plus className="mr-2 h-4 w-4" /> Додати товар</Button>
              </div>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Назва</TableCell>
                    <TableCell>Ціна</TableCell>
                    <TableCell>Категорія</TableCell>
                    <TableCell>Статус</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.id}</TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.price} грн</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardContent className="p-4 text-gray-500">
              Функціонал для замовлень буде реалізовано найближчим часом.
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suppliers">
          <Card>
            <CardContent className="p-4 text-gray-500">
              Список постачальників з можливістю керування товарами.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}