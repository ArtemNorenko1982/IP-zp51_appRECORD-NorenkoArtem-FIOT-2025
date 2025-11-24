 function showTab(tabId) {
            const tabs = document.querySelectorAll('#output .tab-content');
            tabs.forEach(tab => tab.style.display = 'none');
            document.getElementById(tabId).style.display = 'block';
        }