import Button from '../../components/Button/Button'
import Navbar from '../../components/Navbar/Navbar'
import './About.css'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Button title="Byee"/>
    <main>
        <section class="about-introduction">
            <h2>Our Story</h2>
            <p>Welcome to our website! We are passionate about delivering high-quality services and solutions to our clients. Our team is dedicated to excellence and committed to achieving great results.</p>
        </section>
        
        <section class="team">
            <h2>Meet Our Team</h2>
            <div className="team-member">
                <img src="data:image/jpeg;base64,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" alt="" />
                <h3>Jane Doe</h3>
                <p>CEO & Founder</p>
            </div>
            <div class="team-member">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBDgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIEBQYHAwj/xABIEAACAQMCAwQFCQQIAwkAAAABAgMABBEFIQYSMRMiQVEUMmFxgQcVI0KRobHR4RYzUsFDYnJzkpOi8FOCgyQ0RVRVY2Sy8f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIREBAQEBAAIBBAMAAAAAAAAAAAERAiExAxIjM0ETMmH/2gAMAwEAAhEDEQA/AOLRTzxeo9Shq159d/8ATULFIQRjIIzuMjrVRMWTte9XU/kbP/Zb7+8/lXJImdfUrrXyMyM9rfK69JB+FJ7S+nRpf3LVH0c9x6kz/uWqJovSStud9rOjNBqFqupW2lWr3V7JyIu3TJc+QFZaTiaQGsEOP7q6uAllo/cPRpZCDj2jG321e2nE0fZhr+2aJfF4m7RR79gfjjFNXGizRTIZY5oxJE6urDIZehFOqoWikpaAoozvRQFJSGkoA0lDdKMUBRTaCaAozSZozRCGkpSaDVCClpvjTvDPlUCUCkA8fOg0DqAaQUCqHg06vMUuaD5tW17O+DMnMqSAlW6MAdx/KuscUvwfxLwabiHsrC9tI8qnKFdT/DgesD5iua3cireN/WarsWkVxpbP4qK8fXXqvdOJ5jOcPaRJqcsUEbBZJXCAv0BNdh4J4P1HhU3K3zRSRzMCkkZ67dCK5ZosZS0mZcgq+zDqCK6nwFrGp6lbyxX90Zkh2XmHe+J8a3z1b3/jl3xJxrUz/uj7qiaMP3nvqbMPoj7qiaSuC/ur0PLfaec5261yHjDiOS71hzC30ULMkK+AAOCfjj8K66etfP2sK1vqLQYAlWR0YSeasR/IVnr068e063mnmfmeYgHritXw5MzzLCeZkYYDHxrG6U0l3JLAq99FJPKPGvbh64u7fUw8rSRujZVncn7q48275ejqTPDrWio2m3r6edopAZYl/hP1gPxq98Kzc93jUrLUWUtG6cvd8zgZrR9dwRXeV5rLC0UlFGS0maPCigM0lFJRRRQaSqhaaaAd6U0Q3pQTSmmmgDvSYopQaobRRmkoFzSE0U2geDRTM07NA6g03NKDQfNsk3M/NVxHfmOwKK/rVnC1e/bfRctebrjXq57y1ptAXtdLuv7db75NF5VvPePwrBcMOvzTcbeNdB+TgbXfwrHH5Gvk/G2Uv7o+6oenK2fhU2T1W91eGmr3K9bx32k+NcW42t+y4kvhckl2l5lJXGVKjH2dPga7Uw2Nc6+VzTGlsrbV4o8NbHs5seMbePwP4ms9TY3zZKwfD+rR6ffMwhkJIwcHqffVte3Tc9rcyxiHmIUjORnPUVUcPalDYM0jQQTDmJVpI+cp7q0mp6jFrtnbGeMrMsg5QQAPgBXHPL1Tq/S1WizSazPFbTCNfQZtyo2YAdR9tbPI2C9Kw/AMLC8upm6bgE+P+wBW3rvzHm7tp1GaSijIzRSUUQUZpDSA1QtBOKaTSE0QvQ5o5qbRQKTSGkJoFAZ86TmB6UE4pmMHNUPyPGmkg9KWmkUBnFHNTTSGqHE0ZpuaM0Q7NAOKZmlzQfMuacTXnmlzXJ2a7hYj5qm3HWui/Jue9d/CuYcNPy2c6+Ga6Z8mp+lu/cK4cz7jt3ftNxL0Purx03HJXu42Purw05dmyPA16nkS2qm4lube108rcxpL6QwgWJujFtt/Z1+yra9uoLKFri6dY4xtnPU+AArk3F2ty6zfDsiyQRbQqfDzY+0/hiorB31pc6VqMtnIGDROQMjZgOhHmKn6XLcT3UKs4RSQMt/Kuo6KtrremBdVtY7kDCuHUHfzqPqvA2mW9tJe6dem1SIF3inPMoA9vUffWOpfcdeOp6rQ8O2UUGsR2Vp6rwc/nygD+ZP3VPa7ZbbtY0DYPK6+WDWV+TbiGwhupbm97UyXBVDcNjkRR0GOoFaIoYb+/tSytG7dvCQfWVuuD5ZrXG/tn5LN8Pa31W1m35inhg17i5g51XtVLSerk9ayEkclpey8wygAYb+GcV5Xs00UEggyzxfSRA+a94fbjFbxy1uc7bUZrztpluLaGdSOWWNXXHkRmvSo0QmkzvQaSiAmiimmgWjNJkU3xqhaKTNITQKaaTQTTc1QuaQtSZFITRAWpC1IWpvNUCkmgNtTC9ML71Ue3NRzV5h6Qtmg+bKdFFJPIscMbyOxwFRSxJ9gFOtlJkzHKElXdQdgfZn/AGK0fCsPPqwkjh7O4iUiWNgFXBGzd7Zfd9mK49XJrr11k1H0MSQRzxSo6MrYKupBHwNdP+TM/TXXuFc/1CRn1u6ZrmC4kChWMOWC4+rkjf4bVvPkyJ7W628BWOf766278TobLhTnyqtl1GDTYmkl78hXuoDu35V6azfjTtLuLrKlkQlAfPoK5tHrEt7Ke3w0pbr/ABfrXd56tNVvbnVLhmuZMLjuqB3UHsqguIGJJkjQqO6Cn1seOPCr6FUkRXUkHwqsniMDhDvbseZSP6I+I/s/h7uhD+HNQk0fUAesDbFSeta/irTE1/Q5YLWd4VYBjy7Z8cHzBrGXcHKgI2IrR8JX5mgntZXy4hIQE77eFFZf5LLhY9ZubC4ZSO8qE7AMNq2+pBbDiawlVeSK5iaKQKe7nOc48P51x/Rbo2mtTMSQGkcHBwd2NdP1TUhqXDdpfE5ns7lVkPT2Z+IxRVlfQ8twwYcygEGoQtw9mJfHpn3GrWUiV4peqyqKXSYe3t3hlxk9B47j9KrD34ebGkwwn1oeaL/AxX8AKnGs/oN+pvb23LAdncSLgnyY/wA6vnbl2O1StQE03NJzZNITTApJpuTS70h2qgoozSZzVQtIaKSgSkNBz5UUDTtTSacdutR2mhBwZVB8uYVA9mphJPQ0nMvgaSiE5iPKkLZ64oIpOWqFDYpC7fVxQVz1IHvpvJj6w+2iOB6d2MwNpdLyqxzHJ4q2OlamWaXh3RomNxb3QlYSQsoHN3T3VbbO3XG/Sq35tTUppmsrsxJEeYQypysjePMB4+3/AGIGuzTzzxWpQl0UMypvlm3/AJ/fXns2t5Oqgtf3LXM1wZR2srl3IGxJ3qfpnFGr6W7yWd1ylhuCM1USRPE/JIpVvI0w9DW8nt02+nXuNLl5ptAdmJ7aJywzgE8uelVFrF2jd04Ne/EsvPBwrJ5xN/8AU03Sj9N8a0wu7CflKCX+k23/AItz94Gfga9Xi5ZiT0+rTLm17a0lEbBX5coR1DDcff8Admolhqi3MeJBhz5+GNqqFkXsn5f6E+rn6n6fhTUL2dytxCSCDuB41NKCQeYNQpl9GVg6lrfx29T9KDG63ZNp+rtKpzDOe1iIHmdxWg0TUAIL+19ZLi3JAJ+su4+7P2VMuLKHVLFrF2UN61vJ5N+R6Vlbd57SRgylZoQysrddhvRXXdIn9K0uBkOTH1PkKsdLTl5yevJs1Zbgq7E+kQNn1k3x/ZNaot6NZzynbs4Xc59gzVZc6sbspfXcyOeWW5lcEeILk/zrUcT8dPw6liTp63MVzGcSA4wwxkGsDpshWxiZ23CgmtHq1onEXBM4iXNzZ/TRDx26j4jIqKI/ld7SWNPmYDnYLkuNsmuoW91DLBFKVjBdebAHSvlyJuaaE/116e8V3vTLljbRKpOAg60Gpa5jHqqD8KcqCWB2dRsMgYqBaqXwSatwoW1c/wBU1FigJy2aM0h60VqIXNGaSiqhGNNzSmkqDzmJMTD2Vx6OSf8AZXXp+3l7WHUkUNznIHNjA+2uxSDuNnyrjkW/CHE48tTjP+upVih+c9QP/iF38J2/Ok+cb8+tqF3/AJ7fnUWioJJvrw+te3Z/6z/nSelXLdbu5Pvmf86j0uaKkrcXH/mZ/wDNb86XtZT600p98rfnUcNTg1BsLpu1toru6gaC9MQS6kzjnBHUjzIz8cjwqtv5JmsprgFUdkOZD6wAGB7c4wBVhquoPqUlqsMQbMas5fbHUt/qyR7vbVPfWGqXadn2DrbE5HImcn21y99OcnlmPbt8KQ9K0lnwlPdyrEl5EkjeqroVJq1PyZauOs0VdHbUnVpO00jhKTxKEfdUnSTi6X2NXlxZYTaTpXC1pcY7WKXlYjx3qTpvKLjvDAJxVZaoIskAdWxjwIrn8/NYa1c2kjYBIkT2Z/XNbu0LR90HMZ+6sdxxAyarb3S/XQoceJHT8atSJ1hqEg7vUDrVwtwjxglQc9QaxVvLnHKxBxvVlBqj2w5J8MtFxaTQ+ht29n34erweI9q/lUPX4YL6z+crflMsacs39dfA+8U1dctHGA6q3hmqHVpZI7lpLWblV/XVTlW9uKluLJV1wnr9rpGiYlYSXIdkhiB38RlvIZrXWFtrr8wvb6JY7kMXOzqQRuoA8PjXLYbYxi2kTDLcNjA68wNXOmcQ3GlRJbs8xtkmLyWyScrN1+t78fZXG9XXo54kjyN+O3uUurGW3uO1PPbRrgRA74H3fbWv4VddOZywmFrOvKSynGKk8LX1hxDPJNd2kS3QILzMQXkHRR7xWltbSOznlRFXIOGAbGR4e/8ASuvN1w+TmyuE6nY/NnEBtdjGLgNER0KFtvy+Fd6hRHjg5VA+iXpXPuIeE7/XuIRdWjIORRzFv6rHFdAtcwpBHKArBAPjWnOrW2TkA2qwkcpYzMOojJqvaQKiqCOZtl3r1knjFpOruAhjOWJ6VK0y+nao1zM0ci4IAqzPrbHaqDTLXsXWZJe0WQ7bVeqT1zj21ZWJKd4ZozWc4i4qj0K6it5IGkMo5srVto2pRatZJdQoUVvAjxqqmk03I869MYrm/El1eXPGMliLyWG3jiB5Y25aK6KQCCPYa41DtwrxaPK/jPw7SryK0lcEpqV4wGRtLUSfTZbDgniETOW55ImBJ3xzVBg80Zpm460ZqB+aBTenWlFFOzTgaYaUUGw0W09Pv2FxC0asv7wnm5EA2HkD+da6GEwwLBDcckaeqMVS3eq3RtbaTSJ4OZh9IrqFA9vvqINU4iPQ2jfCs8zPLEn7WlwrfOdovaLI6nnLVu9Ot755GM3fXGwFctW+1yO4W5mtLclcAnJG2fdWuu+O9Vjt4za6ZKZT9RhsB761a1IrPlnje2i0d5FIKylvPGKr7Mc0/Ku5znbyq+075QEvdRgsuItLW37VsJJKMqCfaaiassVprN1CoxE8zHmXwTGQPwoqbaXsaqwkHKi47x6VnuNsTaf28UiO0Uikcu/U4xVjFNFcZVUwFQEhhsFzgHP27V4z2PzjK8Uu0GV5BnA5tySfPAFVGIt70Mwjb94egHjVqtndXTcrKEA6ufAVotH06zjeecxKiwAtGCvwz9xpWjW30t0bZ7klwfI52FRrTeE9BsYtatxdQpKZMrlxnBxWU1uykstUu7RlAMUpB+2tnbzGC5glDANEQetO+UnQ47m7jv4nIkulXZemw3/lU6mt8dyOco6qAB3WXcEeBqRYOGmdOfuuCT3c16SaDOiMqg8xGxq30/TY7ixkxbqt7CgV8DcH6rY8mxj3gjyrP0NfyPbhSxZtYt1hm7JTOh/hLZYDYD31u+JeIF0Oe8nuFBBZRCh8c7n7CBWb4c0K7u9WtL+G3ltYQ3aHtWyO0XJAHjj7q8ePdN1WFZEZJb1JF7sqoWI94HQ1qTGPk6+tvOHria6TtjZyjnjBMnLjJPWoOrafqGrX4iMFxa28Iz2wbHN7qzun8Zaxp+kW9udJvW5UC9oI229vSrHTNd1uYQS308pFwSI4cfV861rniw1PhjWL0WKWl40MEXrHPeYU9eB7rDG41G6lUjBQv1FaiGWd7KOXDZ7Pm5cVgG491YOQdHvzjbIifH4VKY31lo8FvaxQIMCLYcwyabJpTiZj2gaNvqgYxXPZflD1GJeaXSrxFzjLqyj7xRa8f6hcyqq2MoQ9W5+lT0qy4y4Ivtbvbee1lSMRKQeYdaveG+H59M0uO1ncMyeIrI6px1f2MkadiWB3Pfpt9xzeW0CSiPPN/wC50q6jovoLL55rkXGDR2XFmqTznCx26beZOaly8f6rJC0sFnJIF9Yq/QVgtf1W41a5kvbkMDMyryk56f8A7TVW1rxTLCp9H095I2Oxr1u+K7i70q7sZ9Jk7C45Q7LnIwc1noriSKNY1blCjGAaudA1mOzkmF4HdXAHuoKbNiOthejPTvUiyaaWx6Hdk+IEm9am/wBas5rd47JHWcnHM6bL7azukzCw1glhzrgh+cbkdaK99PstJ1KZbUPcafNLtE8/eR28j5VDm0jUoZ3iezmLq5UlUJBIqXrOq219ackCOjo/NG2OldO4b1M3ukR3bd8vbcvL48+wzVSuTLpOpM3KthcE+XZmvQaHq7MVGm3OR1HJXZ9Ku4or4PPzMnKQ2Bvmvf8AaXTbeacPFNz9pv3fYPypjOuW6fo9veI2RgqcYXxFS/2chPRnFN0ybsJ5VU5U1ai+b2UW1UPw6oGEnkXz77fnUzgu4u4uIUsRcO9u8TMUkPNgrjcVIkvmAycVC4SkCcRXNzneG1dhnwywoLvj7RJr7R5bkTySSW/0iKQBjzqjF9862NleE5aVEim/tghfyNa+fiASwOkq25VwQwz4Yrn/AAzE8moX2kJLGjCX0iAse7lTgj7CPspSLaznkjjYMf3hHOfMjP8AM/cKl+l/RqOYK2CSfInr9gAFRZIZjKyrHlieijOTUmHh/UbnYyWtup/4twv4KTUHl85LHccpwIXVYsZ6CvHVtWgjlMjSKVQcqAb7VTXsF3HNJHzw8yOVco3NgjY4zXlb2sasGcdo3m4zRce66pPcT8sVvIUP1j1q3vTrl1Z20kMcmbcHKucgjoMYp1pyqAQoHuFaTSL5eYDAXwUnNUvhntK1pZgbS+smhuyp7NW2EjY2Garhq+o6dew6tHaqzwOUu4V6dmcEKfsbfzxXSp9PW9gaeXS4blo+8ilVLMRvkZz+dZad7eVJXWwa2RXIlaIGROY7jtMd5T16rg5JGepYkrd2s0Gu6PFPp9wVjkQPDKnrKwP4g9R7xVppTPEnJdqkkjDvFVwM+Yz0HsrlnD+qvwreM7Evo1w2Zgv9C/8AGPL2iuqRSRToksRWRGUMrqdmB6EUVNn5midFgUcykZxn8KodP0e9tJFM/ZSIrZBSEhvvNWJ1H5uPNIk85l370uQvsANMPEkYyfRH2HTmFRdi4jvF5MNbuDjYcopyLCy8zx8vsxWWbi9QxBazXJ2V5RzD370rcUuASTY4HnL+tQ2NJcJbzLyyW8TKDkAqK8PRbFVx6LEB7FFZ08WnOA2n5/v/ANaT9rJPA2B/6360XYv3s9Pc5a0hPvQU17HTmADWcRH92DVAeK5fAWH+d+tMPFk/8NifdN+tVNjQeiacoZVskVW6gR9a43xsLW8+UuxsoYFW3g5eeNExnALdPhW8k4ylX6lid9/pq5Fc8Qv+211rDxRM7MwVCTjy60R0K7s9OE0EkWlhgCQ2EHQ+Ptqj4l04Xumej2mmpaskgftsjvADcYqF+312BvYW3wc0jfKBMQOawtSPa5qs5VAdfCleRYF5E5V7oquN6jX7XbOpZjkjArVDjiL6uj6eR4d79KT9t4ycfM1gT780aUL652ls0LJBykEbIM1oOB+IBpWiXIMImKyBcFscqnf8c16RcT3V2wS04ctHJ6nlwB7ydhTuCrifQOJ7g3UNs/pMRbsg+UXfPWoVPbjNIrgTQ2qJKv1g2c/Cra3+UezjyZdKgmcgAuRu2M71dniiEHA0/T/i4pRxTF/6fYD/AJxV1HLoGImbFWCk0UVFpJz3K8OG/wDvmrH/AOEv3saKKD2KCqO07nF8CKByyZVh5gqc0UUFi0SoFIG5zv5VI0uYeigiKMNzEFgNzRRURUseW8QjbtFy3tNS16UUVWllbk8gq201z6QV228aKKrNbbSZ35MbeFV/HEa6baDXLL6K+ijGSvqyKTurr0ZdvtJPiaSiqkR9c0+2NvHIsYQT5V0UYXf2VUfJTql0NX1HQmcNY247SFWGTHnqAfL2UUVGm54ntYr7h69imBACM4ZDgqw3BBrlvD0kkulW8ryOXZck8xooqJ+mculB1h8jP03j7602qInoMh5RnlHhRRQrKzv6MAY1XvHByM1Ckv5I/Vji+K0UVFM+dZv+FD/h/WgapKTgxQ/4T+dFFEQ5gJOaVh3jk7U0nZD50UUaKHYAgMRjyr2huJowJEfvL05lVh9hFJRRDpL+4uHMsxjLnqREg+4DFelvPIWzkD3KBRRRVg+p3NtDzIwY/wBavXQ+bU5J3u3LM6EEjA2GOlFFVGdc9m7yDBKvtnpXTrXgrS51hd5boF4EcgOvU/8ALRRRa//Z" alt="" />
                <h3>John Smith</h3>
                <p>CTO</p>
            </div>
            
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 Simple Homepage. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default About