import DataList from "../components/DataList";
import ListCard from "../components/listCard";
import NavBar from "../components/navbar";
import useGetTasks from "../hooks/useGetTasks";
function Info() {
    const { data, refresh } = useGetTasks();
    return (
    <div className="content">
        <NavBar/>
        <h1>Página Inicial</h1>
        <DataList CardComponent={ListCard} data={data} refreshInfo={refresh} />
    </div>

    );
  }
  
export default Info;