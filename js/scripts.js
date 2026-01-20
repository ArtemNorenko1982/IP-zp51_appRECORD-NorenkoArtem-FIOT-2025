        function showTab(tabId) {
            const tabs = document.querySelectorAll('#output .tab-content');
            tabs.forEach(tab => tab.style.display = 'none');
            document.getElementById(tabId).style.display = 'block';
            document.querySelectorAll('.left-nav a').forEach(link => {
                link.classList.remove('isActive');
            });
            document.querySelector(`.left-nav a[onclick="showTab('${tabId}')"]`).classList.add('isActive');
        }

        function navMenuClickItem(event) {
            event.preventDefault();
        }