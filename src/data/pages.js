module.exports = function() {
  return {
    '05': {
      static: [
        {
          image: 'pg5ferienstatic1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '16%'
            },
            zone: {
              top: '16%',
              bottom: '55%',
              left: '7%',
              width: '46%'
            }
          }
        },
        {
          image: 'pg5ferienstatic2',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '27%'
            },
            zone: {
              top: '27%',
              bottom: '44%',
              left: '53%',
              width: '40%'
            }
          }
        },
        {
          image: 'pg5ferienstatic3',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '65%'
            },
            zone: {
              top: '65%',
              bottom: '3%',
              left: '9%',
              width: '40%'
            }
          }
        }
      ]
    },
    '06': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '5%'
            }
          }
        }
      ]
    },
    '07': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '5%'
            }
          }
        }
      ]
    },
    '08': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '0%'
            }
          }
        }
      ]
    },
    '09': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '53%'
            }
          }
        },
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '47%'
            },
            zone: {
              top: '47%',
              bottom: '12%'
            }
          }
        }
      ]
    },
    '10': {
      static: [
        {
          image: 'pg10nathansstatic1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '63%',
              left: '9%',
              width: '41%'
            }
          }
        },
        {
          image: 'pg10nathansstatic2',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '20%'
            },
            zone: {
              top: '11%',
              bottom: '63%',
              left: '50%',
              width: '41%'
            }
          }
        },
        {
          image: 'pg10nathansstatic3',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '37%'
            },
            zone: {
              top: '37%',
              bottom: '38%',
              left: '9%',
              width: '41%'
            }
          }
        },
        {
          image: 'pg10nathansstatic4',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '46%'
            },
            zone: {
              top: '37%',
              bottom: '38%',
              left: '50%',
              width: '41%'
            }
          }
        }
      ]
    },
    '11': {
      exercise: [
        {
          type: 'typer',
          title: 'Wo sind die Kinder? Ergänze!',
          image: 'pg11ex1',
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '8%'
            }
          },
          help: {
            toggle: false,
            text: 'Unde sunt copiii? Priveste imaginile si completeaza.Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '36.2%',
                left: '76%',
                width: '14%'
              },
              model: '',
              solution: 'am Meer'
            },
            {
              identifier: 'two',
              position: {
                top: '58.5%',
                left: '20%',
                width: '22%'
              },
              model: '',
              solution: 'auf dem Land'
            },
            {
              identifier: 'three',
              position: {
                top: '58.5%',
                left: '71%',
                width: '22%'
              },
              model: '',
              solution: 'im Gebirge'
            },
            {
              identifier: 'four',
              position: {
                top: '81.2%',
                left: '19%',
                width: '16%'
              },
              model: '',
              solution: 'am See'
            }
          ]
        }
      ]
    },
    '13': {
      exercise: [
        {
          type: 'typer',
          title: 'Ergänze!',
          image: 'pg13ex3',
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '64%'
            }
          },
          help: {
            toggle: false,
            text: 'Completeaza zilele saptamanii. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '39%',
                left: '53%',
                width: '20%'
              },
              model: '',
              solution: 'Dienstag'
            },
            {
              identifier: 'two',
              position: {
                top: '48.2%',
                left: '23%',
                width: '20%'
              },
              model: '',
              solution: 'Donnerstag'
            },
            {
              identifier: 'three',
              position: {
                top: '58.5%',
                left: '39%',
                width: '20%'
              },
              model: '',
              solution: 'Samstag'
            }
          ]
        },
        {
          type: 'typer',
          title: 'Setze die Jahreszeiten ein!',
          image: 'pg13ex4',
          trigger: {
            button: {
              top: '37%'
            },
            zone: {
              top: '37%',
              bottom: '3%'
            }
          },
          help: {
            toggle: false,
            text: 'Citeste si completeaza cu anotimpul potrivit.Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '33%',
                left: '40%',
                width: '34%'
              },
              model: '',
              solution: 'Frühling'
            },
            {
              identifier: 'two',
              position: {
                top: '44.6%',
                left: '53%',
                width: '36%'
              },
              model: '',
              solution: 'Winter'
            },
            {
              identifier: 'three',
              position: {
                top: '56.3%',
                left: '31%',
                width: '37%'
              },
              model: '',
              solution: 'Herbst'
            },
            {
              identifier: 'four',
              position: {
                top: '68%',
                left: '35%',
                width: '36%'
              },
              model: '',
              solution: 'Sommer'
            }
          ]
        }
      ]
    },
    '15': {
      static: [
        {
          image: 'pg15static1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '25%'
            },
            zone: {
              top: '25%',
              bottom: '62%'
            }
          }
        },
        {
          image: 'pg15static2',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '39%'
            },
            zone: {
              top: '39%',
              bottom: '41%'
            }
          }
        },
        {
          image: 'pg15static3',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '60%'
            },
            zone: {
              top: '60%',
              bottom: '6%'
            }
          }
        }
      ]
    },
    '16': {
      static: [
        {
          image: 'pg16static1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '42%'
            }
          }
        },
        {
          image: 'pg16static2',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '60%'
            },
            zone: {
              top: '60%',
              bottom: '5%'
            }
          }
        }
      ]
    },
    '17': {
      static: [
        {
          image: 'pg17meinefamiliestatic1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '18%'
            },
            zone: {
              top: '18%',
              bottom: '56%',
              left: '8%',
              width: '39%'
            }
          }
        },
        {
          image: 'pg17meinefamiliestatic2',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '23%'
            },
            zone: {
              top: '23%',
              bottom: '53%',
              left: '49%',
              width: '39%'
            }
          }
        },
        {
          image: 'pg17meinefamiliestatic3',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '45%'
            },
            zone: {
              top: '45%',
              bottom: '31%',
              left: '8%',
              width: '39%'
            }
          }
        }
      ]
    },
    '18': {

      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '19': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '20': {
      exercise: [
        {
          type: 'type',
          title: 'Hör zu und schreib die Nummern!',
          image: 'pg20ex2',
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '48%'
            }
          },
          help: {
            toggle: false,
            text: 'Priveste, asculta si scrie numerele. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '32.1%',
                left: '78.5%',
                width: '4.3%',
                height: '3.3%'
              },
              model: '',
              solution: '1'
            },
            {
              identifier: 'two',
              position: {
                top: '29.4%',
                left: '66.3%',
                width: '4.3%',
                height: '3.3%'
              },
              model: '',
              solution: '2'
            },
            {
              identifier: 'three',
              position: {
                top: '36.1%',
                left: '51.7%',
                width: '4.3%',
                height: '3.3%'
              },
              model: '',
              solution: '3'
            },
            {
              identifier: 'four',
              position: {
                top: '34.8%',
                left: '14%',
                width: '4.3%',
                height: '3.3%'
              },
              model: '',
              solution: '4'
            },
            {
              identifier: 'five',
              position: {
                top: '34.4%',
                left: '30.9%',
                width: '4.3%',
                height: '3.3%'
              },
              model: '',
              solution: '5'
            }
          ]
        }
      ],
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '52%'
            },
            zone: {
              top: '52%',
              bottom: '2%'
            }
          }
        }
      ]
    },
    '22': {
      exercise: [
        {
          type: 'typer',
          title: 'Hör zu und setze  mein, meine, dein, deine  ein!',
          image: 'pg22ex6',
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '42%'
            }
          },
          help: {
            toggle: false,
            text: 'Asculta si completeaza.Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '32.5%',
                left: '29%',
                width: '10%'
              },
              model: '',
              solution: 'mein'
            },
            {
              identifier: 'two',
              position: {
                top: '37.8%',
                left: '30%',
                width: '11%'
              },
              model: '',
              solution: 'dein'
            },
            {
              identifier: 'three',
              position: {
                top: '40.3%',
                left: '27.3%',
                width: '11%'
              },
              model: '',
              solution: 'mein'
            },
            {
              identifier: 'four',
              position: {
                top: '45%',
                left: '40%',
                width: '11%'
              },
              model: '',
              solution: 'Meine'
            },
            {
              identifier: 'five',
              position: {
                top: '47.5%',
                left: '30%',
                width: '11%'
              },
              model: '',
              solution: 'deine'
            },
            {
              identifier: 'six',
              position: {
                top: '50.3%',
                left: '30%',
                width: '11%'
              },
              model: '',
              solution: 'meine'
            },
            {
              identifier: 'seven',
              position: {
                top: '54.8%',
                left: '30%',
                width: '11%'
              },
              model: '',
              solution: 'deine'
            },
            {
              identifier: 'eight',
              position: {
                top: '57.4%',
                left: '31%',
                width: '11%'
              },
              model: '',
              solution: 'meine'
            },
            {
              identifier: 'nine',
              position: {
                top: '62.2%',
                left: '41%',
                width: '11%'
              },
              model: '',
              solution: 'Mein'
            },
            {
              identifier: 'ten',
              position: {
                top: '69.8%',
                left: '26.5%',
                width: '10.5%'
              },
              model: '',
              solution: 'dein'
            }
          ]
        }
      ],
      static: [
        {
          image: 'pg22nicht',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '58%'
            },
            zone: {
              top: '58%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '23': {
      static: [
        {
          image: 'pg23ex7',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '60%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '40%'
            },
            zone: {
              top: '40%',
              bottom: '20%'
            }
          }
        }
      ]
    },
    '24': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '39%'
            }
          }
        },
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '62%'
            },
            zone: {
              top: '62%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '25': {
      static: [
        {
          image: 'pg25ex12',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '49%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '51%'
            },
            zone: {
              top: '51%',
              bottom: '2%'
            }
          }
        }
      ]
    },
    '26': {
      static: [
        {
          image: 'pg26ex15',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '37%'
            },
            zone: {
              top: '37%',
              bottom: '34%'
            }
          }
        },
        {
          image: 'pg26nich',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '66%'
            },
            zone: {
              top: '66%',
              bottom: '2%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '63%'
            }
          }
        }
      ]
    },
    '27': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '14%'
            },
            zone: {
              top: '14%',
              bottom: '44%'
            }
          }
        }
      ]
    },
    '28': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '14%'
            },
            zone: {
              top: '14%',
              bottom: '48%'
            }
          }
        },
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '52%'
            },
            zone: {
              top: '52%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '29': {
      static: [
        {
          image: 'pg29juliasstatic1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '48%'
            },
            zone: {
              top: '48%',
              bottom: '6%',
              width: '48%'
            }
          }
        },
        {
          image: 'pg29juliasstatic2',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '57%'
            },
            zone: {
              top: '48%',
              bottom: '6%',
              left: '52%',
              width: '40%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '52%'
            }
          }
        }
      ]
    },
    '30': {
      static: [
        {
          image: 'pg30ex20',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '42%'
            }
          }
        },
        {
          image: 'pg30ichbin',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '59%'
            },
            zone: {
              top: '59%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '32': {
      static: [
        {
          image: 'pg32ex3static1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '15%'
            },
            zone: {
              top: '15%',
              bottom: '61%',
              left: '10%',
              width: '21%'
            }
          }
        },
        {
          image: 'pg32ex3static2',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '20%'
            },
            zone: {
              top: '15%',
              bottom: '61%',
              left: '31%',
              width: '21%'
            }
          }
        },
        {
          image: 'pg32ex3static3',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '25%'
            },
            zone: {
              top: '15%',
              bottom: '61%',
              left: '52%',
              width: '21%'
            }
          }
        },
        {
          image: 'pg32ex3static4',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '30%'
            },
            zone: {
              top: '15%',
              bottom: '61%',
              left: '73%',
              width: '21%'
            }
          }
        },
        {
          image: 'pg32ex5',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '72%'
            },
            zone: {
              top: '72%',
              bottom: '4%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '40%'
            },
            zone: {
              top: '40%',
              bottom: '29%'
            }
          }
        }
      ]
    },
    '35': {
      static: [
        {
          image: 'pg35ex8static1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '17%'
            },
            zone: {
              top: '17%',
              bottom: '43%'
            }
          }
        },
        {
          image: 'pg35ex8static2',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '58%'
            },
            zone: {
              top: '58%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '37': {
      static: [
        {
          image: 'pg37static1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '20%'
            },
            zone: {
              top: '20%',
              bottom: '47%'
            }
          }
        },
        {
          image: 'pg37static2',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '57%'
            },
            zone: {
              top: '57%',
              bottom: '6%'
            }
          }
        }
      ]
    },
    '38': {
      static: [
        {
          image: 'pg38static1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '53%'
            }
          }
        },
        {
          image: 'pg38static2',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '50%'
            },
            zone: {
              top: '50%',
              bottom: '8%'
            }
          }
        }
      ]
    },
    '39': {
      static: [
        {
          image: 'pg39schule',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '5%'
            }
          }
        }
      ]
    },
    '40': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '41': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '42': {
      exercise: [
        {
          type: 'checker',
          title: 'Hör zu und kreuze RICHTIG oder FALSCH an!',
          image: 'pg42ex3',
          trigger: {
            button: {
              top: '73%'
            },
            zone: {
              top: '73%',
              bottom: '4%'
            }
          },
          help: {
            toggle: false,
            text: 'Asculta si bifeaza R(corect) F(fals). Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '42%',
                left: '73%',
                width: '8%',
                height: '2.7%'
              },
              answerFalse: {
                top: '9%',
                left: '7%'
              },
              answerTrue: {
                top: '9%',
                left: '57%'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '44.7%',
                left: '73%',
                width: '8%',
                height: '2.7%'
              },
              answerTrue: {
                top: '9%',
                left: '7%'
              },
              answerFalse: {
                top: '9%',
                left: '57%'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '47.3%',
                left: '73%',
                width: '8%',
                height: '2.7%'
              },
              answerFalse: {
                top: '9%',
                left: '7%'
              },
              answerTrue: {
                top: '9%',
                left: '57%'
              }
            },
            {
              identifier: 'four',
              model: '',
              position: {
                top: '50%',
                left: '73%',
                width: '8%',
                height: '2.7%'
              },
              answerFalse: {
                top: '9%',
                left: '7%'
              },
              answerTrue: {
                top: '9%',
                left: '57%'
              }
            },
            {
              identifier: 'five',
              model: '',
              position: {
                top: '52.7%',
                left: '73%',
                width: '8%',
                height: '2.7%'
              },
              answerTrue: {
                top: '9%',
                left: '7%'
              },
              answerFalse: {
                top: '9%',
                left: '57%'
              }
            },
            {
              identifier: 'six',
              model: '',
              position: {
                top: '55.4%',
                left: '73%',
                width: '8%',
                height: '2.7%'
              },
              answerTrue: {
                top: '9%',
                left: '7%'
              },
              answerFalse: {
                top: '9%',
                left: '57%'
              }
            }
          ]
        }
      ],
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '27%'
            }
          }
        }
      ]
    },
    '43': {
      static: [
        {
          image: 'pg43ex4static1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '49%',
              left: '11%',
              width: '37%'
            }
          }
        },
        {
          image: 'pg43ex4static2',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '17%'
            },
            zone: {
              top: '12%',
              bottom: '49%',
              left: '49%',
              width: '43%'
            }
          }
        },
        {
          image: 'pg43ex4static3',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '54%'
            },
            zone: {
              top: '54%',
              bottom: '5%',
              left: '11%',
              width: '37%'
            }
          }
        },
        {
          image: 'pg43ex4static4',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '59%'
            },
            zone: {
              top: '54%',
              bottom: '5%',
              left: '49%',
              width: '43%'
            }
          }
        }
      ]
    },
    '44': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '45': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '46': {
      static: [
        {
          image: 'pg46nicht',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '73%'
            },
            zone: {
              top: '73%',
              bottom: '3%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '27%'
            }
          }
        }
      ]
    },
    '47': {
      static: [
        {
          image: 'pg47nicht',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '66%'
            },
            zone: {
              top: '66%',
              bottom: '6%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '4%'
            },
            zone: {
              top: '4%',
              bottom: '55%'
            }
          }
        }
      ]
    },
    '48': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '48%'
            }
          }
        }
      ]
    },
    '49': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '4%'
            },
            zone: {
              top: '4%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '50': {
      static: [
        {
          image: 'pg50ex13',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '14%'
            },
            zone: {
              top: '14%',
              bottom: '51%'
            }
          }
        }
      ],
      exercise: [
        {
          type: 'type',
          title: 'Schreib die Verben ins Kreuzworträtsel!',
          image: 'pg50ex14',
          trigger: {
            button: {
              top: '49%'
            },
            zone: {
              top: '49%',
              bottom: '5%'
            }
          },
          help: {
            toggle: false,
            text: 'Scrie in careu cuvintele corespunzatoare numerelor ilustrate. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '36.4%',
                left: '54%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 's'
            },
            {
              identifier: 'two',
              position: {
                top: '38.7%',
                left: '54%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'p'
            },
            {
              identifier: 'three',
              position: {
                top: '41.1%',
                left: '54%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'i'
            },
            {
              identifier: 'four',
              position: {
                top: '43.4%',
                left: '54%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'five',
              position: {
                top: '45.7%',
                left: '54%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'l'
            },
            {
              identifier: 'six',
              position: {
                top: '48%',
                left: '54%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'seven',
              position: {
                top: '50.4%',
                left: '54%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'eight',
              position: {
                top: '38.7%',
                left: '42.4%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 't'
            },
            {
              identifier: 'nine',
              position: {
                top: '41.1%',
                left: '42.4%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'u'
            },
            {
              identifier: 'ten',
              position: {
                top: '43.4%',
                left: '42.4%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'r'
            },
            {
              identifier: 'eleven',
              position: {
                top: '45.7%',
                left: '42.4%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'twelve',
              position: {
                top: '48%',
                left: '42.4%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'thirteen',
              position: {
                top: '50.4%',
                left: '42.4%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'fourteen',
              position: {
                top: '38.7%',
                left: '51%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 's'
            },
            {
              identifier: 'fifteen',
              position: {
                top: '38.7%',
                left: '57%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'r'
            },
            {
              identifier: 'sixteen',
              position: {
                top: '38.7%',
                left: '60%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'i'
            },
            {
              identifier: 'seventeen',
              position: {
                top: '38.7%',
                left: '63%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'eighteen',
              position: {
                top: '38.7%',
                left: '65.8%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'g'
            },
            {
              identifier: 'ninteen',
              position: {
                top: '38.7%',
                left: '68.8%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'twenty',
              position: {
                top: '38.7%',
                left: '71.8%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'twentyone',
              position: {
                top: '43.4%',
                left: '33.6%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 's'
            },
            {
              identifier: 'twentytwo',
              position: {
                top: '45.8%',
                left: '33.6%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'i'
            },
            {
              identifier: 'twentythree',
              position: {
                top: '48%',
                left: '33.6%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'twentyfour',
              position: {
                top: '50.3%',
                left: '33.6%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'g'
            },
            {
              identifier: 'twentyfive',
              position: {
                top: '52.6%',
                left: '33.6%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'twentysix',
              position: {
                top: '55%',
                left: '33.6%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'twentyseven',
              position: {
                top: '43.4%',
                left: '36.6%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'c'
            },
            {
              identifier: 'twentyeight',
              position: {
                top: '43.4%',
                left: '39.5%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'h'
            },
            {
              identifier: 'twentynine',
              position: {
                top: '43.4%',
                left: '45.2%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'thirty',
              position: {
                top: '43.4%',
                left: '48.1%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'i'
            },
            {
              identifier: 'thirtyone',
              position: {
                top: '43.4%',
                left: '51.1%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'b'
            },
            {
              identifier: 'thirtytwo',
              position: {
                top: '43.4%',
                left: '57%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'thirtythree',
              position: {
                top: '48.1%',
                left: '51%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'l'
            },
            {
              identifier: 'thirtyfour',
              position: {
                top: '48.1%',
                left: '57%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 's'
            },
            {
              identifier: 'thirtyfive',
              position: {
                top: '48.1%',
                left: '60%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'thirtysix',
              position: {
                top: '48.1%',
                left: '63%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'thirtyseven',
              position: {
                top: '50.3%',
                left: '60%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 's'
            },
            {
              identifier: 'thirtyeight',
              position: {
                top: '52.6%',
                left: '60%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 's'
            },
            {
              identifier: 'thirtynine',
              position: {
                top: '54.9%',
                left: '60%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'fourty',
              position: {
                top: '57.2%',
                left: '60%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'fourtyone',
              position: {
                top: '52.6%',
                left: '25%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'm'
            },
            {
              identifier: 'fourtytwo',
              position: {
                top: '52.6%',
                left: '27.9%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'a'
            },
            {
              identifier: 'fourtythree',
              position: {
                top: '52.6%',
                left: '30.8%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'l'
            },
            {
              identifier: 'fourtyfour',
              position: {
                top: '52.6%',
                left: '36.6%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'fourtyfive',
              position: {
                top: '52.6%',
                left: '45.3%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 't'
            },
            {
              identifier: 'fourtysix',
              position: {
                top: '54.9%',
                left: '45.3%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'r'
            },
            {
              identifier: 'fourtyseven',
              position: {
                top: '57.3%',
                left: '45.3%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'i'
            },
            {
              identifier: 'fourtyeight',
              position: {
                top: '59.6%',
                left: '45.3%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'fourtynine',
              position: {
                top: '61.8%',
                left: '45.3%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'k'
            },
            {
              identifier: 'fifty',
              position: {
                top: '64.1%',
                left: '45.3%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'fiftyone',
              position: {
                top: '66.5%',
                left: '45.3%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'fiftytwo',
              position: {
                top: '57.3%',
                left: '39.2%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'z'
            },
            {
              identifier: 'fiftythree',
              position: {
                top: '57.3%',
                left: '42.2%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'fiftyfour',
              position: {
                top: '57.3%',
                left: '48.1%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'c'
            },
            {
              identifier: 'fiftyfive',
              position: {
                top: '57.3%',
                left: '51.1%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'h'
            },
            {
              identifier: 'fiftysix',
              position: {
                top: '57.3%',
                left: '54.1%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'fiftyseven',
              position: {
                top: '57.3%',
                left: '57.1%',
                width: '2.9%',
                height: '2.23%'
              },
              model: '',
              solution: 'e'
            }
          ]
        }
      ]
    },
    '51': {
      static: [
        {
          image: 'pg51schulbus',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '65%'
            },
            zone: {
              top: '65%',
              bottom: '3%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '14%'
            },
            zone: {
              top: '14%',
              bottom: '35%'
            }
          }
        }
      ]
    },
    '52': {
      static: [
        {
          image: 'pg52nicks',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '56%'
            },
            zone: {
              top: '56%',
              bottom: '4%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '44%'
            }
          }
        }
      ]
    },
    '53': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '54': {
      static: [
        {
          image: 'pg54ichkann',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '46%'
            },
            zone: {
              top: '46%',
              bottom: '4%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '56%'
            }
          }
        }
      ]
    },
    '56': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '57': {
      exercise: [
        {
          type: 'typer',
          title: 'Was können die Kinder und was nicht?',
          image: 'pg57ex3',
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '4%'
            }
          },
          help: {
            toggle: false,
            text: 'Priveste imaginile si si ce nu stiu copiii sa faca. si ce nu stiu copiii sa faca. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '37%',
                left: '23.5%',
                width: '25%'
              },
              model: '',
              solution: 'malen'
            },
            {
              identifier: 'two',
              position: {
                top: '40%',
                left: '19%',
                width: '29%'
              },
              model: '',
              solution: 'Basketball spielen...'
            },
            {
              identifier: 'three',
              textarea: true,
              textareaRows: 2,
              position: {
                top: '37%',
                left: '63%',
                width: '29%'
              },
              model: '',
              solution: 'kann am Computer arbeiten und Volleyball spielen.'
            },
            {
              identifier: 'four',
              textarea: true,
              textareaRows: 2,
              position: {
                top: '43%',
                left: '63%',
                width: '29%'
              },
              model: '',
              solution: 'kann nicht Klavier und Hockey spilen.'
            },
            {
              identifier: 'five',
              textarea: true,
              textareaRows: 3,
              position: {
                top: '82%',
                left: '12%',
                width: '39%'
              },
              model: '',
              solution: 'kann Fußball und Tennis spielen. Er kann nicht am Computer arbeiten und Volleyball spielen.'
            },
            {
              identifier: 'six',
              textarea: true,
              textareaRows: 3,
              position: {
                top: '82%',
                left: '54%',
                width: '39%'
              },
              model: '',
              solution: 'kann malen und am Computer arbeiten. Sie kann nicht Hockey und Basketball spielen.'
            },
            {
              identifier: 'seven',
              position: {
                top: '43.2%',
                left: '26.5%',
                width: '22%'
              },
              model: '',
              solution: 'Fußball'
            },
            {
              identifier: 'eight',
              position: {
                top: '46.3%',
                left: '19%',
                width: '29%'
              },
              model: '',
              solution: 'Tennis spielen.'
            }
          ]
        }
      ]
    },
    '59': {
      static: [
        {
          image: 'pg59static1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '26%'
            },
            zone: {
              top: '26%',
              bottom: '46%'
            }
          }
        },
        {
          image: 'pg59static2',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '54%'
            },
            zone: {
              top: '54%',
              bottom: '10%'
            }
          }
        }
      ]
    },
    '60': {
      static: [
        {
          image: 'pg60static1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '60%'
            }
          }
        },
        {
          image: 'pg60static2',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '44%'
            },
            zone: {
              top: '44%',
              bottom: '29%'
            }
          }
        },
        {
          image: 'pg60static3',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '74%'
            },
            zone: {
              top: '74%',
              bottom: '7%'
            }
          }
        }
      ]
    },
    '61': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '63': {
      static: [
        {
          image: 'pg63static1',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '26%'
            },
            zone: {
              top: '26%',
              bottom: '38%'
            }
          }
        },
        {
          image: 'pg63static2',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '62%'
            },
            zone: {
              top: '62%',
              bottom: '2%'
            }
          }
        }
      ]
    },
    '64': {
      exercise: [
        {
          type: 'typer',
          title: 'Finde die Ostereier und ergänze!',
          image: 'pg64ex2',
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '3%'
            }
          },
          help: {
            toggle: false,
            text: 'Priveste imaginea, gaseste oule de Paste si scrie unde sunt. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '68%',
                left: '28%',
                width: '22%'
              },
              model: '',
              solution: 'vor'
            },
            {
              identifier: 'two',
              position: {
                top: '72.2%',
                left: '34%',
                width: '16%'
              },
              model: '',
              solution: 'neben'
            },
            {
              identifier: 'three',
              position: {
                top: '76.2%',
                left: '28%',
                width: '22%'
              },
              model: '',
              solution: 'hinter'
            },
            {
              identifier: 'four',
              position: {
                top: '80.2%',
                left: '34%',
                width: '16%'
              },
              model: '',
              solution: 'auf'
            },
            {
              identifier: 'five',
              position: {
                top: '84.2%',
                left: '33%',
                width: '17%'
              },
              model: '',
              solution: 'im'
            },
            {
              identifier: 'six',
              position: {
                top: '84.2%',
                left: '56%',
                width: '19%'
              },
              model: '',
              solution: 'vor'
            },
            {
              identifier: 'seven',
              position: {
                top: '88.2%',
                left: '32%',
                width: '18%'
              },
              model: '',
              solution: 'im'
            }
          ]
        }
      ]
    },
    '65': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '21%'
            },
            zone: {
              top: '21%',
              bottom: '49%'
            }
          }
        }
      ]
    },
    '66': {
      exercise: [
        {
          type: 'checker',
          title: 'Hör zu und kreuze die richtige Antwort an!',
          image: 'pg66ex4',
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '61%'
            }
          },
          // audio: {
          //   source: 'fundal1',
          //   state: 'stopped'
          // },
          help: {
            toggle: false,
            text: 'Asculta si bifeaza raspunsul corect. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '39%',
                left: '50.7%',
                width: '6%',
                height: '6.5%'
              },
              answerFalse: {
                top: '54%',
                left: '24%'
              },
              answerTrue: {
                top: '9%',
                left: '24%'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '46.7%',
                left: '50.7%',
                width: '6%',
                height: '6.5%'
              },
              answerTrue: {
                top: '54%',
                left: '24%'
              },
              answerFalse: {
                top: '9%',
                left: '24%'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '54.3%',
                left: '50.7%',
                width: '6%',
                height: '6.5%'
              },
              answerTrue: {
                top: '54%',
                left: '24%'
              },
              answerFalse: {
                top: '9%',
                left: '24%'
              }
            }
          ]
        }
      ]
    },
    '68': {
      exercise: [
        {
          type: 'typer',
          title: 'Hör zu und ergänze! Verwende kann / kann nicht !',
          image: 'pg68ex8',
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '68%'
            }
          },
          help: {
            toggle: false,
            text: 'Asculta si completeaza cu kann sau kann nicht. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '41.5%',
                left: '17%',
                width: '14%'
              },
              model: '',
              solution: 'kann'
            },
            {
              identifier: 'two',
              position: {
                top: '41.5%',
                left: '57%',
                width: '13%'
              },
              model: '',
              solution: 'kann'
            },
            {
              identifier: 'three',
              position: {
                top: '45%',
                left: '14%',
                width: '13%'
              },
              model: '',
              solution: 'kann nicht'
            },
            {
              identifier: 'four',
              position: {
                top: '45%',
                left: '54%',
                width: '13%'
              },
              model: '',
              solution: 'kann'
            },
            {
              identifier: 'five',
              position: {
                top: '52%',
                left: '16%',
                width: '13%'
              },
              model: '',
              solution: 'kann'
            },
            {
              identifier: 'six',
              position: {
                top: '52%',
                left: '58%',
                width: '13%'
              },
              model: '',
              solution: 'kann nicht'
            },
            {
              identifier: 'seven',
              position: {
                top: '55.4%',
                left: '16%',
                width: '13%'
              },
              model: '',
              solution: 'kann nicht'
            },
            {
              identifier: 'eight',
              position: {
                top: '55.4%',
                left: '52%',
                width: '21%'
              },
              model: '',
              solution: 'kann'
            }
          ]
        },
        {
          type: 'typer',
          title: 'Schreib die Fragen!',
          image: 'pg68ex10',
          trigger: {
            button: {
              top: '59%'
            },
            zone: {
              top: '59%',
              bottom: '5%'
            }
          },
          help: {
            toggle: false,
            text: 'Scrie intrebarile corespunzatoare raspunsurilor date. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '35%',
                left: '15%',
                width: '42%'
              },
              model: '',
              solution: 'Kannst du Tennis spielen'
            },
            {
              identifier: 'two',
              position: {
                top: '38.8%',
                left: '15%',
                width: '42%'
              },
              model: '',
              solution: 'Kannst du Hockey spielen'
            },
            {
              identifier: 'three',
              position: {
                top: '44.7%',
                left: '15%',
                width: '42%'
              },
              model: '',
              solution: 'Kannst du einen Brief schreiben'
            },
            {
              identifier: 'four',
              position: {
                top: '50.5%',
                left: '15%',
                width: '42%'
              },
              model: '',
              solution: 'Kannst du Volleyball spielen'
            },
            {
              identifier: 'five',
              position: {
                top: '56.4%',
                left: '15%',
                width: '42%'
              },
              model: '',
              solution: 'Kannst du turnen'
            },
            {
              identifier: 'six',
              position: {
                top: '60.1%',
                left: '15%',
                width: '42%'
              },
              model: '',
              solution: 'Kannst du Klavier spielen'
            }
          ]
        }
      ]
    },
    '69': {
      video: [
        {
          video: {
            source: 'test'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '5%'
            }
          }
        }
      ]
    },
    '70': {
      static: [
        {
          image: 'pg70ex12',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '18%'
            }
          }
        },
        {
          image: 'pg70ex13',
          audio: {
            source: 'fundal1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '83%'
            },
            zone: {
              top: '83%',
              bottom: '5%'
            }
          }
        }
      ]
    }
  }
}
