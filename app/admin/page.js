import CarrerasTable from "./components/CarrerasTable";
import MoreVisitedChart from "./components/MoreVisitedChart";

export default function AdminMain() {
    return (
        <div class="grid grid-cols-3 gap-4">
            <div><MoreVisitedChart /></div>
            <div class="col-span-2">
                <CarrerasTable />
            </div>
        </div>

    );
}