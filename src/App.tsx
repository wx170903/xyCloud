import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import routers from "./router";
import Head from "./compontents/head";

function App() {
    return (
        <div className="App">
            <Router>
                <Head/>
                <Routes>
                    {routers.map((item, index) => {
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={<item.component/>}
                            />
                        );
                    })}
                    <Route path="*" element={<Navigate to="/cloud"/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
