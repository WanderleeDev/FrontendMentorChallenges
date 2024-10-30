// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const products = [
  {
    image: {
      thumbnail:
        "https://www.dropbox.com/scl/fi/9uhzzwhdx1rqopkop5jbc/image-waffle-thumbnail.jpg?rlkey=ww8cacfo64ykwjrh0o98u4f6a&st=iesxtehp&raw=1",
      mobile:
        "https://www.dropbox.com/scl/fi/pmgfyj26hzenl3a5pdhhk/image-waffle-mobile.jpg?rlkey=3la1q3xas4ql092n0zdt85l7c&st=lqt3oulp&raw=1",
      tablet:
        "https://www.dropbox.com/scl/fi/s2bzezwipx5vk07y029cw/image-waffle-tablet.jpg?rlkey=ctlb1gkbqwjmu4ikvhxrhetld&st=k2tw9v8k&raw=1",
      desktop:
        "https://www.dropbox.com/scl/fi/me8141zte2x1s9k61bytf/image-waffle-desktop.jpg?rlkey=ptiqc5vxg1z04eyzsku6izrfd&st=ua5wsb2x&raw=1",
    },
    price: 6.5,
    stock: 20,
  },
  {
    image: {
      thumbnail:
        "https://www.dropbox.com/scl/fi/kfrh0yqex1beklptcr00j/image-creme-brulee-thumbnail.jpg?rlkey=a5viq10fafh8qkc6uhg211ix8&st=sucbu0nn&raw=1",
      mobile:
        "https://www.dropbox.com/scl/fi/wf1uga9lqmwkper3vujjp/image-creme-brulee-mobile.jpg?rlkey=z60zq3yt9kyd7ixzkf0ha7iam&st=ewxfrp6i&raw=1",
      tablet:
        "https://www.dropbox.com/scl/fi/ruypg6r6ky2tsqomekuof/image-creme-brulee-tablet.jpg?rlkey=iew0l2igph3byma622w79utw8&st=3q7wjlqu&raw=1",
      desktop:
        "https://www.dropbox.com/scl/fi/2kc70m9cizkurok32pmp3/image-creme-brulee-desktop.jpg?rlkey=rjmjs3nh5x20e2093btra0cnv&st=7qow5gc9&raw=1",
    },
    price: 7.0,
    stock: 20,
  },
  {
    image: {
      thumbnail:
        "https://www.dropbox.com/scl/fi/oauw2aejc9fth2ptrfy76/image-macaron-thumbnail.jpg?rlkey=d543xcqtxfcdo3krusljqascv&st=auwhdv2d&raw=1",
      mobile:
        "https://www.dropbox.com/scl/fi/ap03aqvywhkvc59ufy7m2/image-macaron-mobile.jpg?rlkey=7cw40hx3zumbcb7erudp2tesn&st=pqd1xqel&raw=1",
      tablet:
        "https://www.dropbox.com/scl/fi/wry50j0cwqrii0u6bz5fo/image-macaron-tablet.jpg?rlkey=xwo1sf74p5m5lvjfasvn5mvlv&st=phxui6zo&raw=1",
      desktop:
        "https://www.dropbox.com/scl/fi/jieekldep69f28yovx8l3/image-macaron-desktop.jpg?rlkey=hwbwxrlam18ubm0qza3yc653v&st=nayvfdli&raw=1",
    },
    price: 8.0,
    stock: 20,
  },
  {
    image: {
      thumbnail:
        "https://www.dropbox.com/scl/fi/l4ukp71z0wmumnq6n7cw6/image-tiramisu-thumbnail.jpg?rlkey=5ir8lbngm9r1k0j51xdz7qre3&st=7jvk0k9m&raw=1",
      mobile:
        "https://www.dropbox.com/scl/fi/3hwgjqn1m91iza9w7twqg/image-tiramisu-mobile.jpg?rlkey=f0uau95tqba9zt9a9ts42ul5f&st=p4ulma66&raw=1",
      tablet:
        "https://www.dropbox.com/scl/fi/tulpj0e7kup76lj0x6ctd/image-tiramisu-tablet.jpg?rlkey=rh27ihk51quq7xy71w2uysky5&st=yjeroofw&raw=1",
      desktop:
        "https://www.dropbox.com/scl/fi/q17enue162qdv9j6oc5ie/image-tiramisu-desktop.jpg?rlkey=lyrdc8rm51amfgok5xyq0j9ct&st=0mx0fl0z&raw=1",
    },
    price: 5.5,
    stock: 20,
  },
  {
    image: {
      thumbnail:
        "https://www.dropbox.com/scl/fi/nhs9hyoy8apjc7oc1ycxm/image-baklava-thumbnail.jpg?rlkey=olbnq5hc6bzr87lcksh79rjvg&st=sfs77sxj&raw=1",
      mobile:
        "https://www.dropbox.com/scl/fi/ni7uxra1snrrk2ojmmpci/image-baklava-mobile.jpg?rlkey=r7utj8b902xyrtm1s0b8fnkux&st=ons54o7k&raw=1",
      tablet:
        "https://www.dropbox.com/scl/fi/dv43ukwo8d9a22oe9z2f6/image-baklava-tablet.jpg?rlkey=ojgxf0zjzmk5an9u345fbylsw&st=2hukvssi&raw=1",
      desktop:
        "https://www.dropbox.com/scl/fi/z9wuqmpa2puje5zwo68bv/image-baklava-desktop.jpg?rlkey=yyhajnzxuet4h64qidt05pa35&st=znmurf2d&raw=1",
    },
    price: 4.0,
    stock: 20,
  },
  {
    image: {
      thumbnail:
        "https://www.dropbox.com/scl/fi/s1377mjh30q1b287qyvu9/image-meringue-thumbnail.jpg?rlkey=i116hhpys79115w0pttvc3jye&st=ds6krowf&raw=1",
      mobile:
        "https://www.dropbox.com/scl/fi/e0o689rk66jh7d0wihjh5/image-meringue-mobile.jpg?rlkey=uht0kzghrzyd3nht5re2a916k&st=3tveyg3s&raw=1",
      tablet:
        "https://www.dropbox.com/scl/fi/mvfa3esdph7z4iaanzhxx/image-meringue-tablet.jpg?rlkey=4aznxh30mj1g1ea5ibodybank&st=co37putt&raw=1",
      desktop:
        "https://www.dropbox.com/scl/fi/h3p7nsyzzh83ejg0mdecw/image-meringue-desktop.jpg?rlkey=1g9ivsmik40r4oafmi9q4p0ua&st=kiu10bvx&raw=1",
    },
    price: 5.0,
    stock: 20,
  },
  {
    image: {
      thumbnail:
        "https://www.dropbox.com/scl/fi/o2kwkk8h5pvzc23pd6qcg/image-cake-thumbnail.jpg?rlkey=u7m7ldqqf70eo0iiqdj5a6aw1&st=aofl6tv5&raw=1",
      mobile:
        "https://www.dropbox.com/scl/fi/r6r9108687tv5vg4tq1bx/image-cake-mobile.jpg?rlkey=6mqrzvaymnizn56kc5wjwda16&st=6yh1sg07&raw=1",
      tablet:
        "https://www.dropbox.com/scl/fi/jruivcnvnjohborqnb6jd/image-cake-tablet.jpg?rlkey=xddzgad4f2608nkn1ul85z4tu&st=gnjcyt9h&raw=1",
      desktop:
        "https://www.dropbox.com/scl/fi/nu87dkjrqfknt2pg379bp/image-cake-desktop.jpg?rlkey=na39om033z5vcycourst0igoh&st=li8g3vrl&raw=1",
    },
    price: 4.5,
    stock: 20,
  },
  {
    image: {
      thumbnail:
        "https://www.dropbox.com/scl/fi/4hyd57xi3ob099il35dx2/image-brownie-thumbnail.jpg?rlkey=98eieh586qszi6cdu2qqtluwt&st=hpyjd0w4&raw=1",
      mobile:
        "https://www.dropbox.com/scl/fi/zfq5c91b6rr8bgsrifd1k/image-brownie-mobile.jpg?rlkey=yzyns1yf25z1un19g4td30loz&st=try7vver&raw=1",
      tablet:
        "https://www.dropbox.com/scl/fi/hxjqun8fatrdx36upmjow/image-brownie-tablet.jpg?rlkey=bly4igpdh8fqardj7lzampgqx&st=0ficy6rq&raw=1",
      desktop:
        "https://www.dropbox.com/scl/fi/5du4akt8qe0zu7xbm2unu/image-brownie-desktop.jpg?rlkey=19gbz4zakjdt3xqqop44odh4z&st=xmvo96s7&raw=1",
    },
    price: 4.5,
    stock: 20,
  },
  {
    image: {
      thumbnail:
        "https://www.dropbox.com/scl/fi/u11d67xurbqij3aw1xz7c/image-panna-cotta-thumbnail.jpg?rlkey=dq32hazl9883e6tldgig3v02f&st=8roix56a&raw=1",
      mobile:
        "https://www.dropbox.com/scl/fi/vljx1s21z9p58ap0ln6uz/image-panna-cotta-mobile.jpg?rlkey=kzk9vjlzbyhvjhb8fnei4s1p5&st=7dskxsa1&raw=1",
      tablet:
        "https://www.dropbox.com/scl/fi/zjy8884qjsd4a9nye0zpi/image-panna-cotta-tablet.jpg?rlkey=6vhuqv921w0v6h5x5u35abisz&st=ubx3mdtx&raw=1",
      desktop:
        "https://www.dropbox.com/scl/fi/sn7p7k7iksyvlbh6zltyi/image-panna-cotta-desktop.jpg?rlkey=x2rjki1oxccu7rnydqp3d0r7h&st=84efp5ui&raw=1",
    },
    price: 6.5,
    stock: 20,
  },
];

const translationsEn = [
  {
    language: "en",
    name: "Waffle with Berries",
    category: "Waffle",
  },
  {
    language: "en",
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
  },
  {
    language: "en",
    name: "Macaron Mix of Five",
    category: "Macaron",
  },
  {
    language: "en",
    name: "Classic Tiramisu",
    category: "Tiramisu",
  },
  {
    language: "en",
    name: "Pistachio Baklava",
    category: "Baklava",
  },
  {
    language: "en",
    name: "Lemon Meringue Pie",
    category: "Pie",
  },
  {
    language: "en",
    name: "Chocolate Fudge Cake",
    category: "Cake",
  },
  {
    language: "en",
    name: "Double Chocolate Brownie",
    category: "Brownie",
  },
  {
    language: "en",
    name: "Panna Cotta with Berries",
    category: "Panna Cotta",
  },
];

const translationsEs = [
  {
    language: "es",
    name: "Waffle con Frutas del Bosque",
    category: "Waffle",
  },
  {
    language: "es",
    name: "Crème Brûlée de Vainilla",
    category: "Crème Brûlée",
  },
  {
    language: "es",
    name: "Mix de Cinco Macarons",
    category: "Macaron",
  },
  {
    language: "es",
    name: "Tiramisú Clásico",
    category: "Tiramisú",
  },
  {
    language: "es",
    name: "Baklava de Pistacho",
    category: "Baklava",
  },
  {
    language: "es",
    name: "Pie de Merengue de Limón",
    category: "Pie",
  },
  {
    language: "es",
    name: "Pastel de Chocolate Fudge",
    category: "Pastel",
  },
  {
    language: "es",
    name: "Brownie Doble de Chocolate",
    category: "Brownie",
  },
  {
    language: "es",
    name: "Panna Cotta con Frutas del Bosque",
    category: "Panna Cotta",
  },
];

async function main() {
  console.log("Start seeding ...");

  // Crear traducciones EN
  const translationsEnData = await Promise.all(
    translationsEn.map((t) => {
      return prisma.translation.create({
        data: t,
      });
    })
  );

  // Crear traducciones ES
  const translationsEsData = await Promise.all(
    translationsEs.map((t) => {
      return prisma.translation.create({
        data: t,
      });
    })
  );

  await Promise.all(
    products.map(async (p, i) => {
      const translationIds = [
        translationsEnData[i].id,
        translationsEsData[i].id,
      ];

      const product = await prisma.product.create({
        data: {
          price: p.price,
          stock: p.stock,
          image: p.image,
          translationIds: translationIds,
        },
      });

      console.log(`Created product with id: ${product.id}`);
      return product;
    })
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
