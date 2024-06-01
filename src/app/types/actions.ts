'use server';

import prisma from '@/utils/prisma';
import { redirect } from 'next/navigation';

export const createCar = async (formData: FormData) => {
  const modelId = formData.get('modelId')?.toString();
  const brandId = formData.get('brandId')?.toString();
  const locationId = formData.get('locationId')?.toString();
  const description = formData.get('description')?.toString();
  const price = parseFloat(formData.get('price')?.toString() as string);
  const color = formData.get('color')?.toString();

  if (!modelId || !brandId || !description || !locationId || !price || !color) {
    return;
  }

  await prisma.car.create({
    data: {
      modelId: modelId,
      brandId: brandId,
      locationId: locationId,
      description: description,
      price: price,
      color: color,
    },
  });
  redirect('/');
};
