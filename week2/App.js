import React, { createContext, lazy, Suspense, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import higherOrderComponent from "./components/Hoc";
import Header from "./components/Header";
const SampleRenderProps = lazy(() => import("./components/SampleRenderProps"));
const CounterComponent = lazy(() => import("./components/CounterComponent"));
const SignUpForm = lazy(() => import("./components/SIgnUpForm"));
const SumNumbers = lazy(() => import("./components/SumNumbers"));
const TaskScreen = lazy(() => import("./components/TaskScreen"));
const Photos = lazy(() => import("./components/Photos"));



const App = () => {
  const TestApp = higherOrderComponent(() => {
    return <div>Test App</div>;
  });

  const anupamaContent = useContext(AnupamaContext);

  return (
    <div>
      <BrowserRouter>
        <Header />
        
          <Routes>
            <Route path={"/"} element={<h1>This is on Home Page</h1>} />
            <Route
              path={"/contact"}
              element={<h1>This is on Contact Page</h1>}
            />
            <Route path={"/about"} element={<h1>This is on About Page</h1>} />
            <Route
              path={"/signup"}
              element={
                  <SignUpForm />
              }
            >
              <Route path={"sum"} element={<SumNumbers />} />
            </Route>
            <Route path={"/tasks"} element={<TaskScreen />} />
            <Route
              path={"/counter"}
              element={
                  <CounterComponent />
              }
            />
            <Route path={"/photos"} element={<Photos />} />
            <Route path={"/test"} element={<TestApp />} />
            <Route path={"/sample"} element={<SampleRenderProps />} />
          </Routes>
        
      </BrowserRouter>
    </div>
  );
};

co