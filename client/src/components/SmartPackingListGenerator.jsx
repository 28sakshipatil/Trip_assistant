import React, { useState } from 'react';

// --- DATA FOR PACKING LIST ---
// This data provides detailed, categorized packing suggestions for different regions.
const packingData = {
    'AUD': {
        region: 'Australia / Oceania',
        items: {
            Essentials: ['Passport & Visa', 'Sunscreen (SPF 50+)', 'Insect Repellent', 'Driver\'s License'],
            Clothing: ['Swimsuit', 'Sun Hat or Cap', 'Sunglasses', 'Lightweight T-shirts', 'Shorts', 'Flip-flops or Sandals'],
            Electronics: ['Universal Power Adapter (Type I)', 'Portable Power Bank', 'Waterproof Phone Case'],
            Miscellaneous: ['Beach Towel', 'Reusable Water Bottle', 'Aloe Vera Gel for sunburns'],
        }
    },
    'BRL': {
        region: 'Brazil',
        items: {
            Essentials: ['Passport & Visa', 'Cash (Brazilian Real)', 'Insect Repellent (with DEET)'],
            Clothing: ['Lightweight clothes (cotton/linen)', 'Swimwear', 'Rain jacket (especially for Amazon)', 'Comfortable sandals', 'One pair of closed-toe shoes'],
            Electronics: ['Universal Power Adapter (Type N)', 'Portable Power Bank'],
            Miscellaneous: ['Daypack', 'Basic Portuguese phrasebook', 'Hand sanitizer'],
        }
    },
    'CAD': {
        region: 'Canada',
        items: {
            Essentials: ['Passport/ID', 'Credit/Debit Cards', 'Any necessary prescriptions'],
            Clothing: ['Layered clothing (T-shirts, sweaters, jacket)', 'Waterproof jacket', 'Warm hat and gloves (in winter)', 'Comfortable walking shoes/boots'],
            Electronics: ['Phone & Charger', 'Portable Power Bank', 'Headphones'],
            Miscellaneous: ['Reusable water bottle', 'Sunscreen (in summer)', 'Bear spray (if hiking in national parks)'],
        }
    },
    'CHF': {
        region: 'Switzerland',
        items: {
            Essentials: ['Passport', 'Swiss Travel Pass (if purchased)', 'Credit Cards'],
            Clothing: ['Hiking Boots', 'Multiple warm layers (fleece, thermal)', 'Waterproof & Windproof Jacket', 'Smart casual outfit for cities'],
            Electronics: ['Universal Power Adapter (Type J)', 'Portable Power Bank', 'Camera with extra batteries'],
            Miscellaneous: ['Reusable water bottle', 'Backpack', 'Sunscreen and sunglasses (for mountains)'],
        }
    },
    'EUR': {
        region: 'Europe (General)',
        items: {
            Essentials: ['Passport', 'Credit Cards & some Euros', 'City maps or offline map app'],
            Clothing: ['Comfortable walking shoes (most important!)', 'Stylish scarf', 'Light jacket or trench coat', 'Mix of casual and smart-casual outfits', 'Day bag or anti-theft backpack'],
            Electronics: ['Universal Power Adapter (Type C/F)', 'Portable Power Bank'],
            Miscellaneous: ['Reusable water bottle', 'Travel lock', 'Sleep mask for long flights'],
        }
    },
    'GBP': {
        region: 'United Kingdom',
        items: {
            Essentials: ['Passport', 'Credit Cards & some Pounds', 'Oyster Card (for London)'],
            Clothing: ['Waterproof jacket with hood', 'Umbrella', 'Layered clothing', 'Comfortable, water-resistant shoes', 'A smart outfit for evenings'],
            Electronics: ['Universal Power Adapter (Type G)', 'Portable Power Bank'],
            Miscellaneous: ['Small backpack', 'Reusable shopping bag (for plastic bag charges)'],
        }
    },
    'INR': {
        region: 'India',
        items: {
            Essentials: ['Passport & Visa', 'Cash (Indian Rupee)', 'Hand Sanitizer & Wet Wipes'],
            Clothing: ['Lightweight, loose-fitting clothing', 'Modest attire (long pants/skirts, tops covering shoulders for temples)', 'Scarf or shawl', 'Sturdy, comfortable sandals'],
            Electronics: ['Universal Power Adapter (Type D/M)', 'Portable Power Bank (essential)'],
            Miscellaneous: ['Electrolyte powder', 'Basic first-aid kit', 'Toilet paper'],
        }
    },
    'JPY': {
        region: 'Japan',
        items: {
            Essentials: ['Passport', 'Japan Rail Pass (if purchased)', 'Cash (Yen)', 'Portable Wi-Fi or SIM card'],
            Clothing: ['Comfortable walking shoes (slip-on recommended)', 'Layers', 'Presentable outfits (Japanese dress smartly)', 'Small towel/handkerchief'],
            Electronics: ['Universal Power Adapter (Type A/B)', 'Portable Power Bank'],
            Miscellaneous: ['Trash bag (public bins are rare)', 'Coin purse', 'Face masks'],
        }
    },
    'MXN': {
        region: 'Mexico',
        items: {
            Essentials: ['Passport', 'Sunscreen', 'Insect Repellent'],
            Clothing: ['Swimwear', 'Sun Hat', 'Lightweight clothing', 'Comfortable walking sandals', 'A light sweater for evenings'],
            Electronics: ['Universal Power Adapter (Type A/B)', 'Waterproof phone pouch'],
            Miscellaneous: ['Reusable water bottle', 'Basic Spanish phrasebook', 'After-sun lotion'],
        }
    },
    'USD': {
        region: 'United States',
        items: {
            Essentials: ['ID/Passport', 'Credit Cards', 'Health Insurance Card', 'Rental car confirmation'],
            Clothing: ['Varies greatly by region and season', 'Comfortable walking shoes', 'Jeans or casual pants', 'T-shirts and a sweater/jacket'],
            Electronics: ['Phone & Charger', 'Portable Power Bank'],
            Miscellaneous: ['Any required medications', 'Reusable water bottle'],
        }
    },
};

// --- CHILD COMPONENT: PACKING LIST MODAL ---
// This component displays the packing list in a modal window.
const PackingListModal = ({ currency, onClose }) => {
    const listData = packingData[currency] || { region: 'General Travel', items: { Essentials: ['Passport/ID', 'Local Currency', 'Phone & Charger'], Miscellaneous: ['Medications', 'Comfortable Clothes', 'Toiletries'] } };
    
    // Inline styles for the modal to avoid external CSS dependencies.
    const styles = {
        backdrop: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 20 },
        modal: { backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', width: '90%', maxWidth: '40rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' },
        header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem' },
        title: { fontSize: '1.25rem', fontWeight: '600', color: '#1f2937' },
        closeButton: { background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#9ca3af' },
        content: { marginTop: '1rem', color: '#374151' },
        categoryTitle: { fontWeight: 'bold', fontSize: '1rem', color: '#111827', marginTop: '1rem', borderBottom: '1px solid #f3f4f6', paddingBottom: '0.25rem' },
        listContainer: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' },
        listItem: { listStyleType: '"✓ "', paddingLeft: '0.5rem', marginBottom: '0.25rem' },
    };

    return (
        <div style={styles.backdrop} onClick={onClose}>
            <div style={styles.modal} onClick={e => e.stopPropagation()}>
                <div style={styles.header}>
                    <h2 style={styles.title}>Packing List for {listData.region}</h2>
                    <button onClick={onClose} style={styles.closeButton}>&times;</button>
                </div>
                <div style={styles.content}>
                    <div style={styles.listContainer}>
                        {Object.entries(listData.items).map(([category, items]) => (
                            <div key={category}>
                                <h3 style={styles.categoryTitle}>{category}</h3>
                                <ul style={{ padding: '0.5rem 0 0 1rem', margin: 0 }}>
                                    {items.map(item => <li key={item} style={styles.listItem}>{item}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                     <p style={{marginTop: '2rem', fontSize: '0.875rem', color: '#6b7280', textAlign: 'center'}}> *This is a generalized list. Always check local weather and customs before traveling. </p>
                </div>
            </div>
        </div>
    );
};


// --- MAIN COMPONENT: SMART PACKING LIST GENERATOR ---
const SmartPackingListGenerator = () => {
  // State to manage the selected currency and modal visibility.
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
  const [showPackingList, setShowPackingList] = useState(false);

  // Inline styles for the main component.
  const styles = {
    mainContainer: { fontFamily: 'sans-serif', backgroundColor: '#f9fafb', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' },
    card: { width: '100%', maxWidth: '28rem', backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', padding: '2rem', textAlign: 'center' },
    header: { marginBottom: '1.5rem' },
    h1: { fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937' },
    p: { color: '#6b7280', marginTop: '0.5rem' },
    label: { display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.5rem' },
    select: { width: '100%', padding: '0.75rem', backgroundColor: '#f9fafb', border: '1px solid #d1d5db', borderRadius: '0.5rem', color: '#111827', boxSizing: 'border-box', marginBottom: '1rem' },
    button: { width: '100%', padding: '0.875rem 1rem', backgroundColor: '#2563eb', color: 'white', fontWeight: '600', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' },
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.h1}>Smart Packing List</h1>
          <p style={styles.p}>Get packing suggestions for your destination.</p>
        </div>
        
        <div>
          <label htmlFor="region-select" style={styles.label}>Select Your Destination Region</label>
          <select 
            id="region-select" 
            value={selectedCurrency} 
            onChange={(e) => setSelectedCurrency(e.target.value)} 
            style={styles.select}
          >
            {Object.keys(packingData).map(currency => (
              <option key={currency} value={currency}>
                {packingData[currency].region} ({currency})
              </option>
            ))}
          </select>

          <button 
            onClick={() => setShowPackingList(true)} 
            style={styles.button}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
          >
            Generate Packing List
          </button>
        </div>
      </div>

      {/* The modal is rendered conditionally based on state */}
      {showPackingList && <PackingListModal currency={selectedCurrency} onClose={() => setShowPackingList(false)} />}
    </div>
  );
};

export default SmartPackingListGenerator;
