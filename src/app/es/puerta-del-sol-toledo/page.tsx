import NearbyPage, {generateMetadata as nearbyMetadata} from '@/components/NearbyPage';
const params = Promise.resolve({nearby: 'puerta-del-sol-toledo'});
export function generateMetadata(){return nearbyMetadata({params});}
export default function Page(){return <NearbyPage params={params}/>;}
