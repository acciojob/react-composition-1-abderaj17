import React, { useState } from 'react';

function Tabs({ tabs }) {
    const [activeTabIndex, setActiveTabIndex] = useState(0); // State to track the active tab

    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            {/* Render tab buttons */}
            <div style={{ display: 'flex', borderBottom: '2px solid #ccc', marginBottom: '16px' }}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTabIndex(index)}
                        style={{
                            padding: '10px 20px',
                            cursor: 'pointer',
                            border: 'none',
                            backgroundColor: activeTabIndex === index ? '#f0f0f0' : 'transparent',
                            fontWeight: activeTabIndex === index ? 'bold' : 'normal',
                            outline: 'none',
                            borderBottom: activeTabIndex === index ? '2px solid blue' : 'none'
                        }}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* Render the content of the active tab */}
            <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '4px' }}>
                {tabs[activeTabIndex].content}
            </div>
        </div>
    );
}

export default Tabs;