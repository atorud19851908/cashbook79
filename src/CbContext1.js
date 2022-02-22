import React, { createContext, useContext, useReducer, useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


function cbReducer(state, action) {
    
    switch (action.type) {
        case 'CREATE1':
            return state.concat(action.expense);
           
        case 'EDIT1':
            return state.map(expense => expense.id === action.expense.id ? {
                ...expense,
                type: action.expense.type,
                text: action.expense.text,
                price: action.expense.price,
                date: action.expense.date,
                time: action.expense.time
            } : expense
            );
        case 'REMOVE1':
            return state.filter(expense => expense.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
    
};
    const d = new Date();
    const date =d.toLocaleDateString();
    const time = d.toLocaleTimeString();
const CbStateContext = createContext();
const CbDispatchContext = createContext();
const CbNextIdContext = createContext();
const CbTypeContext = createContext();
const CbSetTypeContext = createContext();
const CbModeContext = createContext();
const CbSetModeContext = createContext();

export function CbProvider1({ children }) {
    const uuid = uuidv4()
  
    const [state1, dispatch] = useReducer(cbReducer, [], () => {
        const localData = localStorage.getItem('state1');

        return localData ? JSON.parse(localData) : [];
      });

      useEffect(() => {
        localStorage.setItem('state1', JSON.stringify(state1));
      }, [state1]);
    const [type, setType] = useState('all');
    const [mode, setMode] = useState({ modeName: 'none', expense: { id: uuid, type: '', text: '', price: 0, time: time, date: date  } });

    return (
        <CbStateContext.Provider value={state1}>
            <CbDispatchContext.Provider value={dispatch}>
                <CbNextIdContext.Provider value={uuid}>
                    <CbTypeContext.Provider value={type}>
                        <CbSetTypeContext.Provider value={setType}>
                            <CbModeContext.Provider value={mode}>
                                <CbSetModeContext.Provider value={setMode}>
                                    {children}
                                </CbSetModeContext.Provider>
                            </CbModeContext.Provider>
                        </CbSetTypeContext.Provider>
                    </CbTypeContext.Provider>
                </CbNextIdContext.Provider>
            </CbDispatchContext.Provider>
        </CbStateContext.Provider>
    );
}

export function useCbState() {
    const context = useContext(CbStateContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useCbDispatch() {
    const context = useContext(CbDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useCbNextId() {
    const context = useContext(CbNextIdContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useCbType() {
    const context = useContext(CbTypeContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useCbSetType() {
    const context = useContext(CbSetTypeContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useCbMode() {
    const context = useContext(CbModeContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useCbSetMode() {
    const context = useContext(CbSetModeContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}