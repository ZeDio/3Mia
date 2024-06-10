using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class obstaculo : MonoBehaviour
{
    [SerializeField]    
    private float velocidade = 0.8f;
    [SerializeField]
    private float variaçãoPosiçãoY;
    private Vector3 posicaoPassaro;
    private bool pontuei;
    private UIcontroler controladorUI;

    // Update is called once per frame

    private void Start()
    {
        this.posicaoPassaro = GameObject.FindAnyObjectByType<passaro>().transform.position;
        this.controladorUI = GameObject.FindAnyObjectByType<UIcontroler>();
    }
    private void Awake()
    {
        this.transform.Translate(Vector3.up * Random.Range(-variaçãoPosiçãoY, variaçãoPosiçãoY));        
    }
    void Update()
    {
        this.transform.Translate(Vector3.left * velocidade * Time.deltaTime);
        if(!this.pontuei && this.transform.position.x < this.posicaoPassaro.x)
        {
            this.controladorUI.adicionarPontos();
            this.pontuei = true;
        }       
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        this.Destruir();
    }

    private void Destruir()
    {
        Destroy(this.gameObject);
    }
}
