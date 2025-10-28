import React from 'react'
import { Tabs } from 'antd'

const { TabPane } = Tabs

function TabbedSection({ activeTab, setActiveTab }) {
  return (
    <div className="w-full">
      <div className="w-full">
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          centered
          size="large"
          className="custom-tabs"
          tabBarStyle={{
            borderBottom: '2px solid #f0f0f0',
            margin: '0',
            padding: '0 8px',
          }}
          style={{
            fontSize: 'clamp(14px, 2vw, 16px)',
          }}
        >
          <TabPane 
            tab={<span className="text-sm sm:text-base font-medium">Breakfast</span>} 
            key="breakfast"
          />
          <TabPane 
            tab={<span className="text-sm sm:text-base font-medium">Lunch</span>} 
            key="lunch"
          />
          <TabPane 
            tab={<span className="text-sm sm:text-base font-medium">Dinner</span>} 
            key="dinner"
          />
        </Tabs>
      </div>
      
      <style jsx>{`
        :global(.custom-tabs .ant-tabs-nav) {
          margin-bottom: 0 !important;
        }
        
        :global(.custom-tabs .ant-tabs-tab) {
          padding: 12px 16px !important;
          margin: 0 8px !important;
        }
        
        @media (max-width: 640px) {
          :global(.custom-tabs .ant-tabs-tab) {
            padding: 10px 12px !important;
            margin: 0 4px !important;
            font-size: 14px !important;
          }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          :global(.custom-tabs .ant-tabs-tab) {
            padding: 12px 20px !important;
            margin: 0 12px !important;
          }
        }
        
        :global(.custom-tabs .ant-tabs-ink-bar) {
          background: #16a34a !important;
        }
        
        :global(.custom-tabs .ant-tabs-tab-active .ant-tabs-tab-btn) {
          color: #16a34a !important;
          font-weight: 600 !important;
        }
      `}</style>
    </div>
  )
}

export default TabbedSection
