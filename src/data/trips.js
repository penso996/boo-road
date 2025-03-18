const trips = [
    {
        id: 1,
        destination: "Roma",
        startDate: "2024-06-01",
        endDate: "2024-06-07",
        travelers: [
            { id: 1, name: "Mario", surname: "Rossi", email: "mario.rossi@mail.it", phone: "+39 06 1234567", fiscalCode: "MRORSS80A01H501U" },
            { id: 2, name: "Luca", surname: "Bianchi", email: "luca.bianchi@mail.it", phone: "+39 02 7654321", fiscalCode: "LCABNC85B02F205Z" },
            { id: 3, name: "Giulia", surname: "Verdi", email: "giulia.verdi@mail.it", phone: "+39 081 9876543", fiscalCode: "GLVVRD90C03L219Q" },
            { id: 4, name: "Anna", surname: "Morelli", email: "anna.morelli@mail.it", phone: "+39 041 3344556", fiscalCode: "ANNMRL78D04L219Y" },
            { id: 5, name: "Fabio", surname: "Romano", email: "fabio.romano@mail.it", phone: "+39 095 2233445", fiscalCode: "FBRRMN82E05T219L" },
            { id: 6, name: "Silvia", surname: "Ferrari", email: "silvia.ferrari@mail.it", phone: "+39 033 5566778", fiscalCode: "SLVFRT90F06D501M" },
            { id: 7, name: "Giorgio", surname: "Marini", email: "giorgio.marini@mail.it", phone: "+39 050 1122334", fiscalCode: "GRGMRN85G07F205K" },
            { id: 8, name: "Valeria", surname: "Conti", email: "valeria.conti@mail.it", phone: "+39 051 6677889", fiscalCode: "VLRCTN93H08H501J" },
            { id: 9, name: "Edoardo", surname: "Ricci", email: "edoardo.ricci@mail.it", phone: "+39 081 9988776", fiscalCode: "EDRRCI79I09C219N" },
            { id: 10, name: "Chiara", surname: "Galli", email: "chiara.galli@mail.it", phone: "+39 071 7766554", fiscalCode: "CHIGLI88L10E205P" }
        ]
    },
    {
        id: 2,
        destination: "Milano",
        startDate: "2024-07-10",
        endDate: "2024-07-17",
        travelers: [
            { id: 11, name: "Antonio", surname: "Esposito", email: "antonio.esposito@mail.it", phone: "+39 081 3456789", fiscalCode: "NTNSPT75D04H501Y" },
            { id: 12, name: "Elisa", surname: "Conti", email: "elisa.conti@mail.it", phone: "+39 011 2233445", fiscalCode: "ELSCTN82E05R205L" },
            { id: 13, name: "Federico", surname: "Moretti", email: "federico.moretti@mail.it", phone: "+39 055 5566778", fiscalCode: "FDRMRT88F06T219M" },
            { id: 14, name: "Martina", surname: "Serra", email: "martina.serra@mail.it", phone: "+39 081 9988771", fiscalCode: "MRTSRR92G07B205K" },
            { id: 15, name: "Stefano", surname: "De Angelis", email: "stefano.deangelis@mail.it", phone: "+39 06 5544332", fiscalCode: "STFDNG88P14I205V" },
            { id: 16, name: "Eleonora", surname: "Costa", email: "eleonora.costa@mail.it", phone: "+39 081 3344551", fiscalCode: "ELNCTS92Q15J501W" },
            { id: 17, name: "Marco", surname: "Benedetti", email: "marco.benedetti@mail.it", phone: "+39 041 5566778", fiscalCode: "MRBNDT81F16T219M" },
            { id: 18, name: "Laura", surname: "Fabbri", email: "laura.fabbri@mail.it", phone: "+39 095 6677889", fiscalCode: "LRFBBR79H17C219J" },
            { id: 19, name: "Andrea", surname: "Mancini", email: "andrea.mancini@mail.it", phone: "+39 050 9988776", fiscalCode: "ANDMNC93I18D501N" },
            { id: 20, name: "Claudia", surname: "Marchetti", email: "claudia.marchetti@mail.it", phone: "+39 071 7766554", fiscalCode: "CLDMCT88L19E205P" }
        ]
    },
    {
        id: 3,
        destination: "Firenze",
        startDate: "2024-08-05",
        endDate: "2024-08-12",
        travelers: [
            { id: 21, name: "Riccardo", surname: "Neri", email: "riccardo.neri@mail.it", phone: "+39 055 1234567", fiscalCode: "RCCNRI80A05F205X" },
            { id: 22, name: "Sara", surname: "Pellegrini", email: "sara.pellegrini@mail.it", phone: "+39 06 9876543", fiscalCode: "SRPLGR85B06H501Y" },
            { id: 23, name: "Dario", surname: "Barbieri", email: "dario.barbieri@mail.it", phone: "+39 081 3344556", fiscalCode: "DRBRBR90C07T219Z" },
            { id: 24, name: "Elena", surname: "Gatti", email: "elena.gatti@mail.it", phone: "+39 041 2233445", fiscalCode: "ELGTT78D08L219V" },
            { id: 25, name: "Lorenzo", surname: "Rinaldi", email: "lorenzo.rinaldi@mail.it", phone: "+39 095 5566778", fiscalCode: "LRNRND82E09C219K" },
            { id: 26, name: "Francesca", surname: "Ferrara", email: "francesca.ferrara@mail.it", phone: "+39 033 1122334", fiscalCode: "FRCFRR90F10D501P" },
            { id: 27, name: "Matteo", surname: "Lombardi", email: "matteo.lombardi@mail.it", phone: "+39 050 6677889", fiscalCode: "MTLMBR85G11F205M" },
            { id: 28, name: "Veronica", surname: "De Luca", email: "veronica.deluca@mail.it", phone: "+39 051 9988776", fiscalCode: "VRCNDL93H12H501J" },
            { id: 29, name: "Simone", surname: "Romani", email: "simone.romani@mail.it", phone: "+39 081 7766554", fiscalCode: "SMNRMN79I13C219N" },
            { id: 30, name: "Alessia", surname: "Caruso", email: "alessia.caruso@mail.it", phone: "+39 071 2233445", fiscalCode: "ALCRS88L14E205P" }
        ]
    },
    {
        id: 4,
        destination: "Napoli",
        startDate: "2024-09-15",
        endDate: "2024-09-22",
        travelers: [
            { id: 31, name: "Giovanni", surname: "Sorrentino", email: "giovanni.sorrentino@mail.it", phone: "+39 081 3456789", fiscalCode: "GVNSRR75D15H501X" },
            { id: 32, name: "Isabella", surname: "D’Amico", email: "isabella.damico@mail.it", phone: "+39 011 5566778", fiscalCode: "ISBDMC82E16R205Y" },
            { id: 33, name: "Cristian", surname: "Ferri", email: "cristian.ferri@mail.it", phone: "+39 055 9988776", fiscalCode: "CRSFRR88F17T219M" },
            { id: 34, name: "Giada", surname: "Russo", email: "giada.russo@mail.it", phone: "+39 081 3344551", fiscalCode: "GDRSS92G18B205L" },
            { id: 35, name: "Pietro", surname: "Greco", email: "pietro.greco@mail.it", phone: "+39 06 7766554", fiscalCode: "PTRGRC88P19I205N" },
            { id: 36, name: "Serena", surname: "Vitale", email: "serena.vitale@mail.it", phone: "+39 081 2233445", fiscalCode: "SRNVTL92Q20J501W" },
            { id: 37, name: "Daniele", surname: "Mazza", email: "daniele.mazza@mail.it", phone: "+39 041 5566778", fiscalCode: "DNLMZZ81F21T219J" },
            { id: 38, name: "Monica", surname: "Bellini", email: "monica.bellini@mail.it", phone: "+39 095 6677889", fiscalCode: "MNCBLL79H22C219M" },
            { id: 39, name: "Fabian", surname: "Orlando", email: "fabian.orlando@mail.it", phone: "+39 050 9988776", fiscalCode: "FBNORL93I23D501N" },
            { id: 40, name: "Cecilia", surname: "Palmieri", email: "cecilia.palmieri@mail.it", phone: "+39 071 2233445", fiscalCode: "CCLPLM88L24E205P" }
        ]
    },
    {
        id: 5,
        destination: "Venezia",
        startDate: "2024-10-05",
        endDate: "2024-10-12",
        travelers: [
            { id: 41, name: "Leonardo", surname: "Piras", email: "leonardo.piras@mail.it", phone: "+39 041 1234567", fiscalCode: "LNRPRS80A25F205X" },
            { id: 42, name: "Beatrice", surname: "Sereni", email: "beatrice.sereni@mail.it", phone: "+39 06 9876543", fiscalCode: "BTRSRN85B26H501Y" },
            { id: 43, name: "Vincenzo", surname: "Coppola", email: "vincenzo.coppola@mail.it", phone: "+39 081 3344556", fiscalCode: "VNCPLL90C27T219Z" },
            { id: 44, name: "Lucia", surname: "Mele", email: "lucia.mele@mail.it", phone: "+39 041 2233445", fiscalCode: "LCMLE78D28L219V" },
            { id: 45, name: "Davide", surname: "Longo", email: "davide.longo@mail.it", phone: "+39 095 5566778", fiscalCode: "DVDLNG82E29C219K" },
            { id: 46, name: "Ginevra", surname: "Martini", email: "ginevra.martini@mail.it", phone: "+39 033 1122334", fiscalCode: "GNVMTN90F30D501P" },
            { id: 47, name: "Tommaso", surname: "Fiore", email: "tommaso.fiore@mail.it", phone: "+39 050 6677889", fiscalCode: "TMMFR85G31F205M" },
            { id: 48, name: "Camilla", surname: "De Santis", email: "camilla.desantis@mail.it", phone: "+39 051 9988776", fiscalCode: "CMLDST93H32H501J" },
            { id: 49, name: "Alberto", surname: "Grassi", email: "alberto.grassi@mail.it", phone: "+39 081 7766554", fiscalCode: "ALBGRS79I33C219N" },
            { id: 50, name: "Emma", surname: "Ruggieri", email: "emma.ruggieri@mail.it", phone: "+39 071 2233445", fiscalCode: "EMRGRG88L34E205P" }
        ]
    }
];


export default trips;