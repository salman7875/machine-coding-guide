import { styles } from "../component/styles";
import TreeSection from "../component/tree";
import { RECURSIVE_DATA } from "../data";

const RecursivePage = () => {
  return (
    <div style={styles.main}>
      <h3 style={{ color: "#5C6AC4" }}>Project Structure</h3>
      <TreeSection node={RECURSIVE_DATA} depth={0} />
    </div>
  );
};

export default RecursivePage;
