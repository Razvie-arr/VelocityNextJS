'use server';

import prisma from '@/utils/prisma';
import { redirect } from 'next/navigation';
import { CarSearchParams } from '@/app/(home)/page';

export const createCar = async (formData: FormData) => {
  const modelId = formData.get('modelId')?.toString();
  const brandId = formData.get('brandId')?.toString();
  const locationId = formData.get('locationId')?.toString();
  const description = formData.get('description')?.toString();
  const price = parseFloat(formData.get('price')?.toString() as string);
  const color = formData.get('color')?.toString();
  const year = parseInt(formData.get('year')?.toString() as string);

  if (
    !modelId ||
    !brandId ||
    !description ||
    !locationId ||
    !price ||
    !color ||
    !year
  ) {
    return;
  }

  const modelName = await findModelNameById(modelId);
  const brandName = await findBrandNameById(brandId);
  const urlParams = `?brand=${brandName}&model=${modelName}`;

  try {
    await prisma.car.create({
      data: {
        modelId: modelId,
        brandId: brandId,
        locationId: locationId,
        description: description,
        price: price,
        color: color,
        year: year,
      },
    });
    redirect(`/car/new/success${urlParams}`);
  } catch (e) {
    redirect(`/car/new/error${urlParams}`);
  }
};

export const fetchCarsWithFilter = async (carSearchParams: CarSearchParams) => {
  const whereClause: any = {};
  if (carSearchParams.brandName) {
    whereClause.brand = {
      name: carSearchParams.brandName,
    };
  }
  if (carSearchParams.modelName) {
    whereClause.model = {
      name: carSearchParams.modelName,
    };
  }
  if (carSearchParams.city) {
    whereClause.location = {
      city: carSearchParams.city,
    };
  }
  if (carSearchParams.description) {
    whereClause.description = {
      contains: carSearchParams.description || '',
    };
  }
  if (carSearchParams.color) {
    whereClause.color = {
      contains: carSearchParams.color || '',
    };
  }
  if (carSearchParams.minPrice) {
    whereClause.price = {
      gte: parseFloat(String(carSearchParams.minPrice)),
    };
  }
  if (carSearchParams.maxPrice) {
    whereClause.price = {
      lte: parseFloat(String(carSearchParams.maxPrice)),
    };
  }
  if (carSearchParams.year) {
    whereClause.year = parseInt(String(carSearchParams.year));
  }
  return prisma.car.findMany({
    where: whereClause,
    include: {
      brand: true,
      model: true,
      location: true,
    },
    orderBy: [
      {
        location: {
          city: 'asc',
        },
      },
      {
        brand: {
          name: 'asc',
        },
      },
    ],
  });
};

export const redirectCarFilter = async (formData: FormData) => {
  let newUrl = '?';
  const city = formData.get('city')?.toString();
  const brandId = formData.get('brandId')?.toString();
  const modelId = formData.get('modelId')?.toString();
  const description = formData.get('description')?.toString();
  const color = formData.get('color')?.toString();
  const minPrice = formData.get('minPrice');
  const maxPrice = formData.get('maxPrice');
  const year = formData.get('year');

  if (brandId) {
    const brandName = await findBrandNameById(brandId);
    if (brandName) {
      newUrl = addParam(newUrl, 'brand', brandName);
    }
  }
  if (modelId) {
    const modelName = await findModelNameById(modelId);
    if (modelName) {
      newUrl = addParam(newUrl, 'model', modelName);
    }
  }
  if (city) {
    newUrl = addParam(newUrl, 'city', city);
  }
  if (description) {
    newUrl = addParam(newUrl, 'description', description);
  }
  if (color) {
    newUrl = addParam(newUrl, 'color', color);
  }
  if (minPrice) {
    newUrl = addParam(newUrl, 'minPrice', minPrice.toString());
  }
  if (maxPrice) {
    newUrl = addParam(newUrl, 'maxPrice', maxPrice.toString());
  }
  if (year) {
    newUrl = addParam(newUrl, 'year', year.toString());
  }
  redirect('/' + newUrl);
};

const addParam = (url: string, paramName: string, paramValue: string) => {
  if (url.charAt(url.length - 1) === '?') {
    url += `${paramName}=${paramValue}`;
  } else {
    url += `&${paramName}=${paramValue}`;
  }
  return url;
};

export const fetchLocations = async () => {
  return prisma.location.findMany();
};

export const fetchBrands = async () => {
  return prisma.brand.findMany();
};

export const fetchModels = async () => {
  return prisma.carModel.findMany();
};

const findBrandNameById = async (brandId: string) => {
  const brand = await prisma.brand.findUnique({ where: { id: brandId } });
  return brand != null ? brand.name : '';
};

const findModelNameById = async (modelId: string) => {
  const model = await prisma.carModel.findUnique({ where: { id: modelId } });
  return model != null ? model.name : '';
};
