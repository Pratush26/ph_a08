import { toast } from "react-toastify";

export const findDB = (dbName) => {
    if (!localStorage.getItem(dbName)) localStorage.setItem(dbName, JSON.stringify([]));
    return JSON.parse(localStorage.getItem(dbName));
};

export function AddToInstalledList(id, name) {
    let db = findDB('installedApps');
    if (db.find(e => e == id)) {
        db = db.filter(e => e !== id);
        localStorage.setItem("installedApps", JSON.stringify(db));
        toast(`Successfully uninstalled ${name}`)
    }
    else {
        db = [...db, id];
        localStorage.setItem('installedApps', JSON.stringify(db));
        toast(`Successfully installed ${name}`)
    }
}