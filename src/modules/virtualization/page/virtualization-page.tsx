import { LIST_DATA } from "../data/data";
import VirtualizedList from "../component/virtualized-list";
import VirtualizedOptimizedList from "../component/virtualized-optimized-list";

function VirtualizationPage() {
  return (
    <div className="flex items-center justify-between p-20">
      <VirtualizedList
        list={LIST_DATA}
        height={400}
        width={300}
        itemHeight={35}
      />
      <VirtualizedOptimizedList
        list={LIST_DATA}
        height={400}
        width={300}
        itemHeight={35}
      />
    </div>
  );
}

export default VirtualizationPage;
