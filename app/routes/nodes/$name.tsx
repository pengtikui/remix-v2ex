import { useLoaderData, LoaderFunction, Link } from 'remix';
import { getNodeByName } from '~/lib/api';

export const loader: LoaderFunction = async ({ params }) => {
  return getNodeByName(params.name!);
};

export default function NodePage() {
  const data = useLoaderData();

  return (
    <div className="w-[760px] mx-auto my-6 bg-white shadow-sm rounded-sm">
      <div className="flex p-4">
        <img className="w-16 h-16 rounded" src={`${data.avatar}`} alt={data.title} />
        <div className="ml-4">
          <ul className="flex items-center text-lg text-gray-900">
            <li>
              <Link className="font-medium hover:underline" to="/">
                V2EX
              </Link>
            </li>
            <li className="mx-1">
              <span>/</span>
            </li>
            <li>
              <p>{data.title}</p>
            </li>
          </ul>
          <p className="mt-1 text-gray-800" dangerouslySetInnerHTML={{ __html: data.header }} />
        </div>
      </div>
    </div>
  );
}
