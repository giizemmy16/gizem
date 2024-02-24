import React from 'react';

export const Stats = ({ todolist }) => {
    let countList = todolist.lenght;
    return (
        <div className="stats">
            <p className="notify">
                {countList === 0 ? 'Başardınız Tebrikler!' : 'Tebrikler 🌸'}
            </p>
        </div>
    );
};

export default Stats;