import { LIST_DATA } from "../data/data";
import VirtualizedList from "../component/virtualized-list";

function VirtualizationPage() {
  return (
    <div>
      <VirtualizedList
        list={LIST_DATA}
        height={400}
        width={300}
        itemHeight={35}
      />
    </div>
  );
}

export default VirtualizationPage;
