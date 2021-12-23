import { useLoaderData, Link } from 'remix';
import { NODE_GROUP_LIST } from '~/lib/nodes';
import type { NodeGroup } from '~/lib/nodes';

export const loader = async () => {
  return NODE_GROUP_LIST;
};

export default function Index() {
  const groups = useLoaderData<NodeGroup[]>();

  const renderGroup = (group: NodeGroup) => {
    return (
      <div key={group.title} className="flex p-4 pb-2 border-b border-b-gray-100 last:border-none">
        <p className="w-24 flex-shrink-0 text-gray-500">{group.title}</p>
        <ul className="flex flex-wrap text-gray-900 -mr-2">
          {group.nodes.map((node) => (
            <li key={node.name} className="mr-4 mb-2">
              <Link className="hover:underline" to={`/nodes/${node.name}`}>
                {node.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="w-[760px] mx-auto my-6 bg-white shadow-sm rounded-sm">
      <div className="flex items-center px-4 py-3 border-b border-b-gray-100 text-gray-600">
        <Link className="font-extrabold text-lg" to="/">
          V2EX
        </Link>
        <span className="mx-2">/</span>
        <p>节点导航</p>
      </div>
      {groups.map((group) => renderGroup(group))}
    </div>
  );
}
