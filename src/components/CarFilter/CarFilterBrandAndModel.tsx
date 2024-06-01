// import { Brand, CarModel } from '@prisma/client';
// import { useMemo, useState } from 'react';
//
// const CarFilterBrandAndModel = ({
//   brands,
//   models,
// }: {
//   brands: Brand[];
//   models: CarModel[];
// }) => {
//   const [locationId, setLocationId] = useState('');
//   const [brandId, setBrandId] = useState('');
//   const [isModelSelectDisabled, setIsModelSelectDisabled] = useState(true);
//
//   const brandPlaceholder = '--- Select brand ---';
//   const modelPlaceholder = '--- Select model ---';
//
//   const filteredModels = useMemo(() => {
//     return models.filter((model) => model.brandId === brandId);
//   }, [brandId, models]);
//   return 'brand and model';
// };
//
// export default CarFilterBrandAndModel;
